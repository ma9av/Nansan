import Image from "next/image";

const Service = () => {
  return (
    <section className="h-auto pt-24 mt-10" id="service">
          <div className="flex justify-center text-2xl">
            <span className="bg-blue-950 p-2 text-white rounded-2xl">
              
              Services we provide
            </span>
          </div>
          <span className="flex text-center m-auto pt-10 w-2/3 text-xl">
            NANSAN is a leading provider of security and compliance solutions,
            helping businesses of all sizes create safe and transparent
            environments. We offer a comprehensive range of services
          </span>

          <div className=" flex flex-col gap-5 pt-10 pb-10   sm:flex-row">
            <figure className=" w-1/2 p-5 m-auto">
              <img src="biometric.jpg" alt="" />
            </figure>

            <article className="  w-2/3 m-auto p-5">
              <span className=" font-bold text-xl">Biometrics and Frisking:</span> Secure your premises and assets with
              cutting-edge biometric identification and frisking solutions. We
              implement fingerprint scanners, iris scanners, and facial
              recognition technology to ensure authorized access and deter
              unauthorized activity.
            </article>
          </div>

          <div className=" flex  flex-col-reverse gap-5 pt-10 pb-10   sm:flex-row">
            
            <article className="  w-2/3 m-auto p-5">
            <span className=" font-bold text-xl">Audits and Surveys:</span> Maintain regulatory compliance and gain
              valuable insights into your operations with our comprehensive
              audit and survey services. Our experienced team can assess your
              security protocols, identify potential risks, and recommend
              effective mitigation strategies.
            </article>

            <figure className=" w-1/2 p-5 m-auto">
              <img src="audit.jpg" alt="" />
            </figure>

          </div>
        </section>
  )
}

export default Service