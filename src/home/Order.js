import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Order({addCoffee, currentUser}){
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (coffeeData) => handleNewCoffee(coffeeData);

    function handleNewCoffee(coffeeData) {
      const newData = {...coffeeData, user_id: currentUser.id}
        addCoffee(newData)
    }

    return(
        <>
        <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="formbold-mb-5">
              <label for="title" class="formbold-form-label">
                Add a new coffee
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
              <label for="type" class="formbold-form-label">
                Coffee type
              </label>
              <input {...register("coffee_type")} 
              required="yes" 
                type="string"
                id="type"
                placeholder="Type"
                class="formbold-form-input"
              />
            </div>

            <div class="formbold-mb-5">
              <label for="description" class="formbold-form-label">
                Coffee description
              </label>
              <textarea {...register("description")} 
              required="yes" 
                id="description"
                placeholder="Description"
                class="formbold-form-input"></textarea>
            </div>

            <div class="formbold-mb-5">
              <label for="email" class="formbold-form-label">
                Coffee price
              </label>
              <input {...register("price")} 
              required="yes" 
                type="number"
                name="email"
                id="email"
                placeholder="Price"
                class="formbold-form-input"
              />
            </div>

            <div className='main-url's>
            <br />
              <fieldset>
              <legend>Add coffee image url</legend>

              <input type="url" name="url" {...register("image")} required="yes"  
              style={{width: "400px"}} placeholder="Enter URL..." /><br /><br />

            </fieldset>
            </div>
            
      
            {/*<div class="mb-6 pt-4">
              <label class="formbold-form-label formbold-form-label-2">
                Image of coffee
              </label>
      
              <div class="formbold-mb-5 formbold-file-input">
                <input type="file" name="file" id="file" />
                <label for="file">
                  <div>
                    <span class="formbold-drop-file"> Drop files here </span>
                    <span class="formbold-or"> Or </span>
                    <span class="formbold-browse"> Browse </span>
                  </div>
                </label>
              </div>
          </div> */}
      
            <div>
            <br />
              <button type="submit" class="formbold-btn w-full">Make Order</button>
            </div>
          </form>
        </div>
      </div>
        </>
    )
}