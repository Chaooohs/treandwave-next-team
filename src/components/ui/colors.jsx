import { useDispatch, useSelector } from "react-redux";
import { addColor, removeColor } from "@/redux/features/textureSlice";
import { setColorCardColor, setColorCardIndex } from "@/redux/features/choiseCardColorSlice";
import { cn } from "@/lib/utils";

export const Colors = ({ colors, width, height, className }) => {
  const dispatch = useDispatch();
  const colorChoise = useSelector((state) => state.colorCard.color);

  const onChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      dispatch(addColor(value));
    } else if (!checked) {
      dispatch(removeColor(value));
    }
  };

  const handleColorClick = (index, color) => {
    dispatch(setColorCardIndex(index));
    dispatch(setColorCardColor(color));
  };

  return (
    <div className={cn("flex gap-x-4", className)}>
      {Array.isArray(colors) &&
        colors?.map((color, index) => {
          return (
            <div key={index}>
              <input
                id={`color${index}`}
                type="radio"
                name="color"
                value={color.colorName}
                checked={colorChoise === color.colorName}
                onChange={onChange}
                onClick={() => handleColorClick(index, color.colorName)}
                className="hidden input-color"
              />
              <label
                htmlFor={`color${index}`}
                className="rounded-full relative cursor-pointer"
                style={{
                  border: color.colorName === "white" ? "1px solid #E7E7E7" : `1px solid ${color.colorName}`,
                  backgroundColor: color.colorName,
                  width: "24px",
                  height: "24px",
                }}></label>
            </div>
          );
        })}
    </div>
  );
};
