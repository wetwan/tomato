

const Header = () => {
  return (
    <section className="h-[34vw] mx-auto my-9 bg-header bg-no-repeat bg-contain bg- relative">
        <div className="fade-in absolute  lg:max-w-[50%] max-w-[65%] md:max-w-[45%]  flex flex-col gap-[1.5vw] items-start bottom-[10%] left-[6vw]">
            <h2 className="font-medium text-white custom-font-size"> Order your favourite food here</h2>
            <p className=" text-white text-[1vw] hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi esse laborum rerum iusto quaerat cumque itaque culpa eius sit ducimus.
            </p>
            <button className="text-[#757575] px-[4vw] py-[2vw] md:px-[2.3vw] md:py-[1vw] bg-white p-size rounded-full  font-medium capitalize"> view menu</button>
        </div>
    </section>
  )
}

export default Header