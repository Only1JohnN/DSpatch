import { Link } from "react-router-dom";
import { Button } from "../../components";

const Signup = () => {
    return (
        <div className='p-4 d-none d-sm-block signup--box'>
          <p>Find support for your bookings, account and other issues</p>
          <div className='text-center signup--btn'>
            <Button className='bttn'>
              <Link href='/'>Log in or Sign up</Link>
            </Button>
          </div>
        </div>
    );
}
 
export default Signup;