import React from "react";

const Why = () => {
  return (
    <div className=" p-10 flex flex-row  place-content-center">
        <div>
        <span className=" flex justify-center text-center ">
          <span className="bg-blue-950 text-white text-2xl rounded-md p-2">Why Choose NANSAN?</span>
        </span>
        <ul className="pt-10 w-1/2 m-auto flex flex-col gap-10 ">
          <li>
            <strong>Expertise :</strong> We have a team of highly trained and experienced
            professionals who are well-versed in the latest security
            technologies and best practices.
          </li>
          <li>
            <strong>Customization:</strong> We tailor our solutions to your specific needs and
            budget, ensuring you get the right level of security for your
            business.
          </li>
          <li>
            <strong>Technology:</strong> We leverage cutting-edge technology to provide you with
            the most effective and efficient security solutions available.
          </li>
          <li>
            <strong>Reliability:</strong> We are committed to providing you with reliable and
            dependable service, 24/7.
          </li>
        </ul>
    </div>
    </div>
  );
};

export default Why;
