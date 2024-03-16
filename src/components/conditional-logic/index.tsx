import { useState } from 'react';
import { whenConditions, thenConditions } from '../../constants/conditions';
import { useForm, Controller } from 'react-hook-form';

const ConditionComponent = ({ components, id, schema, setSchema }: any) => {
    const { handleSubmit, control } = useForm();
    const [conditions, setConditions] = useState({})
    
    const onSubmit = (data: any) => {
        setConditions({ ...conditions, data });
        const newSchema = {
            "question":id,
            "condition":data
        };
        setSchema({...schema, ...newSchema})
        console.log(conditions);
        isHidden = true;
        // Here you can generate your schema based on the form data
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col border p-4'>
                <Controller
                    name="id"
                    control={control}
                    defaultValue={id}
                    render={({ field }) => <input type="hidden" {...field} />}
                />
                <div className='flex border p-2'>
                    <span className='border rounded-lg p-2'>When</span>
                    <Controller
                        name="whenComponent"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <select {...field}>
                                {components.map((component: any) => (
                                    <option value={component.name}>{component.name}</option>
                                ))}
                            </select>
                        )}
                    />
                    <Controller
                        name="whenCondition"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <select {...field}>
                                {/* TO DO: either option or manual input */}
                                {whenConditions.map((condition) => (
                                    <option value={condition}>{condition}</option>
                                ))}
                            </select>
                        )}
                    />
                    <Controller
                        name="whenValue"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input type="text" className='border' {...field} />}
                    />
                </div>
                <div className='flex border p-2 justify-evenly'>
                    <span className='border rounded-lg p-2'>Then</span>
                    <Controller
                        name="thenCondition"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <select {...field}>
                                {thenConditions.map((condition) => (
                                    <option value={condition}>{condition}</option>
                                ))}
                            </select>
                        )}
                    />
                    <Controller
                        name="thenComponent"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <select {...field}>
                                {components.map((component: any) => (
                                    <option value={component.name}>{component.name}</option>
                                ))}
                            </select>
                        )}
                    />
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ConditionComponent;