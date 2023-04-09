
import beach from '../assets/image02.png'

function Images() {
    return (
      <div>
        {/* from public folder*/}
        <img src="/image01.png" alt="image01"/>
        {/* image from assets folder*/}
        <img src={beach} alt="image02"/>
      </div>  
    );
}

export default Images;