import { useDispatch } from "react-redux"
import { addSize, removeSize } from "@/redux/features/textureSlice"



export const Sizes = ({ sizes, width, height }) => {
  const dispatch = useDispatch()

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
    <div className="flex flex-wrap gap-2 mt-3 w-[344px]">
      {
        sizes?.map((size, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                value={size}
                id={`size${index}`}
                onChange={onChange}
                className="hidden input-size "
              />
              <label
                htmlFor={`size${index}`}
                className='rounded-lg flex items-center justify-center font-semibold text-sm cursor-pointer'
                style={{ width: width, height: height, border: '1px solid #ededed', textTransform: 'uppercase' }}
              >
                {size}
              </label>
            </div>
          )
        })
      }
    </div>
  )
}