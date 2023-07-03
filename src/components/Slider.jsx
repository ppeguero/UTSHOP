
import images from "../exports/images"


const Slider = () => {
    return(
        <div>
            {images.map(image => (
                < img src={image} alt=""/>
            ))}
        </div>
    )
}
export default Slider