import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import './style.css'

const HookForm = () => {

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      "name": "",
      "email": "",
      "city": "",
      "education": {
        "startYear": "",
        "endYear": "",
        "branch": "",
      },
      "skills": [{ "skill": "" }]
    }
  });


  const { fields, append, remove } = useFieldArray({
    name: 'skills',
    control
  });

  const onSubmit = (data) => {

    console.log('data', data)

  }

  return (
    <>
      <div className="formPage">
        <form className="hookForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="formGroupParent">
            <div className="formGroup">
              <div className="formElements">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name"  {...register('name', {
                  required: {
                    value: true,
                    message: "Please fill the name field"
                  },
                  validate: {
                    minLength: (value) => {
                      return value.length > 4 || 'Minimum length should be 5'

                    }
                  }

                })} />
              </div>
              <p className='errorMessage'>{errors.name?.message}</p>
            </div>
            <div className="formGroup">
              <div className="formElements">
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="City" {...register('city', {
                  required: {
                    value: true,
                    message: "Please fill the city field"
                  }

                })} />
              </div>
              <p className='errorMessage'>{errors.city?.message}</p>
            </div>
            <div className="formGroup">
              <div className="formElements">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Email" {...register('email', {
                  required: {
                    value: true,
                    message: "Please fill the email field"
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Enter a valid email address',
                  },
                  validate: {
                    checkDuplicate: (value) => {
                      return value !== 'rohit@gmail.com' || 'Name already exists'
                    }
                  }

                })} />
              </div>
              <p className='errorMessage'>{errors.email?.message}</p>
            </div>
          </div>

          <div className="formGroupParent">
            <h3>Education</h3>
            <div className="formGroup">
              <div className="formElements">
                <label htmlFor="startYear">Start Year</label>
                <input type="number" id="startYear" {...register("education.startYear", {
                  required: {
                    value: true,
                    message: "Please fill the start year of your education"
                  }
                })} />
              </div>
              <p className='errorMessage'>{errors.education?.startYear?.message}</p>
            </div>
            <div className="formGroup">
              <div className="formElements">
                <label htmlFor="endYear">End Year</label>
                <input type="number" id="endYear" {...register("education.endYear", {
                  required: {
                    value: true,
                    message: "Please fill the end year of your education"
                  }
                })} />
              </div>
              <p className='errorMessage'>{errors.education?.endYear?.message}</p>
            </div>
            <div className="formGroup">
              <div className="formElements">
                <label htmlFor="branch">Branch</label>
                <input type="text" id="branch" {...register("education.branch", {
                  required: {
                    value: true,
                    message: "Please fill the branch"
                  }
                })} />
              </div>
              <p className='errorMessage'>{errors.education?.branch?.message}</p>
            </div>

          </div>
          <div className="formGroupParent">
            <h3>Skills</h3>
            {
              fields.map((field, index) => (
                <div className="formGroup" key={field.id}>
                  <div className="formElements" >
                    <input type="text" {...register(`skills.${index}.skill`)} />
                  </div>
                  {index > 0 && 
                    
                    <button className="removeButton" onClick={() => { remove(index) }}>
                      Remove
                    </button>
                 }
                </div>


              ))
            }

            <button
              type="button"
              onClick={() => append({ "skill" : "" })}
            >
              append
            </button>


          </div>
          <button className="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default HookForm;
