import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"

interface CreateFormData {
    title: string;
    description: string
}


const postsRef = collection(db, "posts")

export const CreateForm = () =>{

    const navigate = useNavigate()

    const [user] = useAuthState(auth)

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("You must add a description."),
        
    })

    const { register, handleSubmit, formState: {errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            id: user?.uid

        });

        navigate("/")
    }

    return (
        <div className="create-form-page">
            <form onSubmit={handleSubmit(onCreatePost)} action="">
                <input placeholder="Title..." {...register("title")} />
                <p>{errors.title?.message}</p>
                <textarea placeholder="Description..." {...register("description")} />
                <p>{errors.description?.message}</p>
                <input type="submit" />
            </form>
        </div>
    )
}