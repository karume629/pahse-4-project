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

    return (
			<>
				<div className='formbold-main-wrapper'>
					<div className='formbold-form-wrapper'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='formbold-mb-5'>
								<label htmlFor='title' className='formbold-form-label'>
									Add a new pet
								</label>
								<input
									{...register('name')}
									required='yes'
									type='string'
									id='title'
									placeholder='Name'
									className='formbold-form-input'
								/>
							</div>

							<div className='formbold-mb-5'>
								<label htmlFor='description' className='formbold-form-label'>
									Pet description
								</label>
								<textarea
									{...register('description')}
									required='yes'
									id='description'
									placeholder='Description'
									className='formbold-form-input'
								></textarea>
							</div>

							<div className='formbold-mb-5'>
								<label htmlFor='email' className='formbold-form-label'>
									Pet image
								</label>
								<input
									{...register('image')}
									required='yes'
									type='url'
									placeholder='Image URL'
									className='formbold-form-input'
								/>
							</div>

							<div>
								<br />
								<button type='submit' className='formbold-btn w-full'>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</>
		);
}