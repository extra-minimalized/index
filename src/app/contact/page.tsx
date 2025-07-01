export default function ContactPage() {
  return (


    <section
      id="contact"
      className="h-screen mt-10 flex flex-col items-center justify-center selection:bg-brown_color pb-24"
    >
      <h2 className="my-2 font-SMUSnow text-blue_color text-xl md:text-2xl selection:bg-redbrown_color">Contact Info</h2>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <div className="w-96 flex flex-col justify-between mt-10 text-lg">
        <p className="flex justify-center items-center my-2">
          <i className="fas fa-map-marker-alt mr-2"></i>
          Daejeon, South Korea
        </p>

        <p className="flex justify-center items-center my-2">
          <i className="fas fa-envelope mr-2"></i>  
          oceankoreaview@gmail.com
          </p>
        <p className="flex justify-center items-center my-2">
          <a
            href="https://github.com/extra-minimalized"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <i className="fab fa-github mr-2"></i>
            extra-minimalized
          </a>
        </p>
        <p className="flex justify-center items-center my-2">
          
          <a
            href="https://www.youtube.com/@extra-minimalized"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <i className="fab fa-youtube mr-2"></i>
            extra
          </a>
        </p>
        <p className="flex justify-center items-center my-2">
          <a
            href="https://discord.gg/id/971401032330526740"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <i className="fab fa-discord mr-2"></i>
            @hydrodysis
          </a>
        </p>

      </div>
    </section>
  );
}