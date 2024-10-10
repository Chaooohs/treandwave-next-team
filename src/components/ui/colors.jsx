import { useDispatch } from "react-redux"
import { addColor, removeColor } from "@/redux/features/textureSlice"
import { cn } from "@/lib/utils"


export const Colors = ({ colors, width, height, className, onHandleClick }) => {
  const dispatch = useDispatch()

  const onChange = (e) => {
    const value = e.target.value
    const checked = e.target.checked
    if (checked) {
      dispatch(addColor(value))
    } else if (!checked) {
      dispatch(removeColor(value))
    }
  }

  return (
    <div className={cn("flex gap-x-2", className)}>
      {
        Array.isArray(colors) &&
        colors?.map((color, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                name="color"
                value={color.colorName}
                id={`color${index}`}
                onChange={onChange}
                onClick={()=>onHandleClick(index)}
                className="hidden input-color"
              />
              <label
                htmlFor={`color${index}`}
                className='rounded cursor-pointer'
                style={{ backgroundColor: color.colorName, width: width, height: height, border: '1px solid #121212'}}
              >
              </label>
            </div>
          )
        })
      }
    </div>
  )
}