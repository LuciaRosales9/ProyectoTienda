export const Carousel = () => {
    return (
        <section id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <section className="carousel-inner">
            <section className="carousel-item active">
            <img src="../images/img_romeco1.png" className="d-block w-100" alt="..."/>
            </section>
            <section className="carousel-item">
            <img src="../images/img_romeco2.png" className="d-block w-100" alt="..."/>
            </section>
            <section className="carousel-item">
            <img src="../images/img_romeco1.png" className="d-block w-100" alt="..."/>
            </section>
        </section>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </section>
    );
  };