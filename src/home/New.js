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
			<form className='new-pet' onSubmit={handleSubmit(onSubmit)}>
				<br />
				<br />
				<div className='main-div'>
					<label htmlFor='title' className='label'>
						Add a new pet
					</label>
					<br />
					<input
						{...register('name')}
						required='yes'
						type='string'
						placeholder='Name' 
						className='input'
					/>
				</div>
				<br />

				<div className='main-div'>
					<label className='label' htmlFor='description'>
						Pet description
					</label>
					<br />
					<textarea
						{...register('description')}
						required='yes'
						id='description'
						placeholder='Description' 
						className='input-text'
					></textarea>
				</div>

				<div className='main-div'>
					<label className='label' htmlFor='email'>
						Pet image
					</label>
					<br />
					<input
						{...register('image')}
						required='yes'
						type='url'
						placeholder='Image URL' 
						className='input'
					/>
				</div>
				<br />

				<div>
					<br />
					<button className='btn' type='submit'>
						Submit
					</button>
				</div>
			</form>
			</>
		);
}