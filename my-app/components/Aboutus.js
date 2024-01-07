
import Image from "next/image";
const Aboutus = () => {
    return (
        <>
        <div className="flex place-content-center pt-5">
            <span className=" bg-blue-950 place-content-center p-2 text-white text-2xl rounded-2xl ">
              About us
            </span>
          </div>

          <div className="flex place-content-center">
            <span className=" max-w-lg p-4 text-center">
              Founded by Pritam Jangid in 20XX when he realised there was a
              problem to be solved in contract employing. Today we are one of
              the leading manpower supply organisation in the Gujarat , and hope
              to grow across India.
            </span>
          </div>

          <div className="mt-10 p-4">
            <h1 className="text-center text-2xl ">
              <span className="bg-blue-950 p-2 text-white rounded-2xl ">
                {" "}
                Meet the Founders{" "}
              </span>
            </h1>

            <div className="flex justify-center gap-10 pt-10">
              <div className="flex flex-col">
                <Image src="/founder.jpg" width={400} height={60} alt="" />
                <span className=" text-center">Founder</span>
              </div>

              <div className="flex flex-col">
                <Image
                  src="/founders/Aman.jpg"
                  width={300}
                  height={40}
                  alt=""
                />
                <span className=" text-center"> Aman Tiwari </span>
              </div>
            </div>
          </div>

          </>
    
  )
}

export default Aboutus