import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function New({addPet, currentUser}){
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => handleNewPet(data);

    function handleNewPet(data) {
      const newData = {...data, likes: 0, user_id: currentUser.id}
      addPet(newData)
    }

    return(
        <>
        <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="formbold-mb-5">
              <label for="title" class="formbold-form-label">
                Add a new pet
              </label>
              <input {...register("name")} 
              required="yes" 
                type="string"
                id="title"
                placeholder="Name"
                class="formbold-form-input"
              />
            </div>

            <div class="formbold-mb-5">
              <label for="description" class="formbold-form-label">
                Pet description
              </label>
              <textarea {...register("description")} 
              required="yes" 
                id="description"
                placeholder="Description"
                class="formbold-form-input"></textarea>
            </div>

            <div class="formbold-mb-5">
              <label for="email" class="formbold-form-label">
                Pet image
              </label>
              <input {...register("image")} 
              required="yes" 
                type="url"
                placeholder="Image URL"
                class="formbold-form-input"
              />
            </div>
      
            <div>
            <br />
              <button type="submit" class="formbold-btn w-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
        </>
    )
}