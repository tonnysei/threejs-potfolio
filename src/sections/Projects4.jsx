import { useState, useEffect } from 'react'

const projects = [
  {
    title: "Business website - Grilli",
    desc: 'This restaurant website template combines stunning design with essential features like an interactive menu, immersive gallery, easy contact form, and a seamless reservation system.',
    subdesc:
      'Fully responsive, it delivers a flawless experience on any device, making it the perfect choice to showcase a modern restaurant and attract diners.',
    imageUrl: "assets/moc1.png",
    url: "https://resaturant-website.vercel.app",  // Added the URL here
  },
  {
    title: "E-commerce Platform",
    desc: 'This e-commerce website template has easy-to-use product categories, a smooth ordering system, and a simple, user-friendly design.',
    subdesc:
      'It includes an admin panel where owners can manage products and categories, making it a great choice for any online store.',
    imageUrl: "assets/moc2.png",
    url: "https://sogim-store.vercel.app",  // Added the URL here
  },
  
  {
    title: 'Portfolio template - photographer',
    desc: 'This photographer portfolio template is a visually striking and thoughtfully designed website that captivates viewers at first glance.',
    subdesc:
      'Crafted with precision and creativity, it offers a seamless blend of aesthetic appeal and functionality, making it the perfect showcase for professional photographers.',
    imageUrl: "assets/moc3.png",
    url: "https://photographer-portfolio-rho-seven.vercel.app/",  // Added the URL here
  },
  {
    title: 'E-commerce - Khitandbead',
    desc: 'This e-commerce website template has a nice product card , a smooth ordering system, and a user-friendly design.',
    subdesc:
      'Powered by Sanity CMS, the admin panel allows easy management of products, categories, and content in real-time, making it ideal for scalable and user-friendly online stores.',
    imageUrl: "assets/moc4.png",
    url: "https://e-commerce-jewrly.vercel.app/",  // Added the URL here
  },
  // {
  //   title: 'dentist website',
  //   desc: 'This dentist website template features appointment booking, service details, and a contact form.',
  //   subdesc:
  //     'Its modern, responsive design is perfect for dental clinics to attract and assist patients online.',
  //   imageUrl: "assets/moc4.png",
  //   url: "https://e-commerce-jewrly.vercel.app/",  // Added the URL here
  // }
]

export function Projects4() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % projects.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrent((prevCurrent) => (prevCurrent - 1 + projects.length) % projects.length)
  }

  const handleNext = () => {
    setCurrent((prevCurrent) => (prevCurrent + 1) % projects.length)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-none">
      <h1 className="text-4xl font-bold mb-8 text-center text-greyy">Our Latest Projects</h1>
      <div className="relative bg-whitee rounded-3xl shadow-lg overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0 max-h-[806px] md:max-h-[406px]">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center gap-4">
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-4 text-lg">{project.desc}<br />{project.subdesc}</p>
                  
                  <button
                    className="button"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    <div className="wrap">
                      <p>
                        <span>✧</span>
                        <span>✦</span>
                        open website
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-black/70 rounded-full p-2 shadow-md arrow-btn"
          aria-label="Previous project"
        >
          <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4 "/>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-black/70 rounded-full p-2 shadow-md arrow-btn"
          aria-label="Next project"
        >
          <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4 " />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === current ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects4
