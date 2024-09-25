import { SlCalender } from "react-icons/sl";
import { MdAddCall } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
    return (
        <div className="grid grid-cols md:grid-cols-1 lg:grid-cols-3 gap-3 space-y-7 text-center bg-black my-10 rounded-3xl p-20 text-white">
            <div className="flex justify-center items-center gap-4 ">
                <div><SlCalender className="text-3xl"></SlCalender></div>
                <div>
                    <p>
                        We are open monday-friday
                    </p>
                    <h3 className="text-xl font-bold text-red-600">7:00 am - 9:00 pm</h3>
                </div>
            </div>

            <div className="flex justify-center items-center gap-4">
                <div><MdAddCall
                    className="text-4xl"></MdAddCall></div>
                <div>
                    <p>
                        Have a question?
                    </p>
                    <h3 className="text-xl font-bold text-red-600">+2546 251 2658</h3>
                </div>
            </div>

            <div className="flex justify-center items-center gap-4">
                <div><MdOutlineLocationOn
                    className="text-4xl"></MdOutlineLocationOn></div>
                <div>
                    <p>
                        Need a repair? our address
                    </p>
                    <h3 className="text-xl font-bold text-red-600">Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;