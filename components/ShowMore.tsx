'use client'
import { useRouter} from "next/navigation";
import {ShowMoreProps} from "@/types/interface";
import {CustomButton} from "@/components/indexx";
import {updateSearchParams} from "@/utils";

const ShowMore = ({pageNumber,isNext}:ShowMoreProps) =>

{
    const router = useRouter()
    const handleNevigation= () =>{
        const newLimit = (pageNumber + 1)*10;
        const newPathName = updateSearchParams('limit', `${newLimit}`)

        router.push(newPathName)
    }
    return(
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                title="Show more"
                btnType="button"
                containerStyles="bg-primary-blue rounded-full text-white"
                handleClick={handleNevigation}/>
            )}
        </div>
    )
}
export default ShowMore