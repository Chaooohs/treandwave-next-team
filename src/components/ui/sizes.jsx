import { useDispatch, useSelector } from "react-redux"
import { addSize, removeSize } from "@/redux/features/textureSlice"
import { cn } from "@/lib/utils"


export const Sizes = ({ colors, width, height, className, onHandleClick }) => {
  const dispatch = useDispatch()
  const colorChoiseIndex = useSelector((state) => state.colorCard.index);

  const onChange = (e) => {
    const value = e.target.value
    const checked = e.target.checked
    if (checked) {
      dispatch(addSize(value))
    } else if (!checked) {
      dispatch(removeSize(value))
    }
  }


  return (
    <div className={cn("flex flex-wrap gap-2 w-[344px] mob:w-full", className)}>
      {
        Array.isArray(colors) &&
        colors[colorChoiseIndex].sizes?.map((size, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                name="size"
                value={size.size.name}
                id={`size${index}`}
                onChange={onChange}
                onClick={onHandleClick}
                className="hidden input-size "
              />
              <label
                htmlFor={`size${index}`}
                className='rounded flex items-center justify-center font-semibold text-sm cursor-pointer'
                style={{ width: width, height: height, border: '1px solid #ededed', textTransform: 'uppercase' }}
              >
                {size.size.name}
              </label>
            </div>
          )
        })
      }
    </div>
  )
}