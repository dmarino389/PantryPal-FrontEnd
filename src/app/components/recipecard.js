import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function RecipeCard({name , image , link , time , missingIngredients, id }) {

    const router = useRouter()

    const toSlug = () => {
        console.log(id)
        router.push(`/${name}/${id}`)
      }

    const handleMissingIngredients = () => {
        if(missingIngredients == 0){
            return 'you have all the ingredients'
        }else{
            return `you need ${missingIngredients} more ingredients`
        }
    }
    const handleTime = () => {
        const numTime = Number(time);
    
        if (isNaN(numTime)) {
            console.error('Time is not a valid number:', time);
            return 'Invalid time';
        }
    
        if (numTime < 10) {
            return '< 10 mins';
        } else if (numTime >= 10 && numTime < 60) {
            return `${numTime} minutes`;
        } else {
            const hours = Math.floor(numTime / 60);
            const minutes = numTime % 60;
            
            return `${hours} hour${hours > 1 ? 's' : ''}${minutes > 0 ? ` and ${minutes} minute${minutes !== 1 ? 's' : ''}` : ''}`;
        }
    }
    return (
        <div onClick={toSlug} className='cursor-pointer overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg'>
          <div className='relative w-full h-56'> {/* Set a fixed height for image consistency */}
            <Image
              priority
              layout='fill' // Changed to 'fill' for responsive image
              objectFit='cover'
              alt={name}
              src={image}
              className="rounded-t-lg" // Add rounded corners to the top of the image
            />
          </div>
          <div className='flex flex-col p-4 space-y-2 bg-white rounded-b-lg'> {/* Add bg-white and rounded-b-lg for styling */}
            <h2 className='text-lg font-bold text-left'>{name}</h2>
            <div className='text-sm text-gray-700'>{handleMissingIngredients()}</div>
            <div className='flex justify-between items-center'>
              <div className='rounded-full bg-gray-100 px-3 py-1 text-sm'>
                <span>{handleTime()}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }