import "./Contacto.css";

function Contacto() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__overlay"></div>
        <div className="container-global contact-hero__container">
          <div className="contact-hero__content">
            <p className="contact-hero__label">
              Contacto
            </p>
            <span
              className="hero__separator"
              aria-hidden="true"
            ></span>

            <h1 className="contact-hero__title">
              Hablemos
            </h1>

            <p className="contact-hero__description">
              Hablemos de miel, naturaleza y todo lo que quieras saber.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container-global contact-content__container">
          <div className="contact-form-wrapper">
            <h2 className="contact-section-title">
              Envíanos un mensaje
            </h2>

            <p className="contact-section-description">
              Cuéntanos en qué podemos ayudarte y te responderemos lo
              antes posible.
            </p>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form__field">
                <label
                  htmlFor="contact-name"
                  className="contact-form__label"
                >
                  Nombre
                </label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="contact-form__input"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label
                  htmlFor="contact-email"
                  className="contact-form__label"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="contact-form__input"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label
                  htmlFor="contact-subject"
                  className="contact-form__label"
                >
                  Asunto
                </label>

                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  className="contact-form__input"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label
                  htmlFor="contact-message"
                  className="contact-form__label"
                >
                  Mensaje
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  className="contact-form__textarea"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-form__submit"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <aside className="contact-details">
            <h2 className="contact-section-title">
              También puedes contactarnos
            </h2>

            <ul className="contact-details__list">
              <li className="contact-details__item">
                <span className="contact-details__icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3 6.5h18v12H3z" />
                    <path d="m4 7.5 8 6 8-6" />
                  </svg>
                </span>

                <div>
                  <h3 className="contact-details__title">
                    Email
                  </h3>

                  <a
                    href="mailto:hola@colmenar028.es"
                    className="contact-details__link"
                  >
                    hola@colmenar028.es
                  </a>
                </div>
              </li>

              <li className="contact-details__item">
                <span className="contact-details__icon">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.2 3.5 10 8l-2 2.1a15 15 0 0 0 5.9 5.9L16 14l4.5 2.8-1.1 3.1c-.3.8-1.1 1.3-2 1.2C9.7 20.1 3.9 14.3 2.9 6.6c-.1-.9.4-1.7 1.2-2Z" />
                  </svg>
                </span>

                <div>
                  <h3 className="contact-details__title">
                    Teléfono
                  </h3>

                  <a
                    href="tel:+34600123456"
                    className="contact-details__link"
                  >
                    600 123 456
                  </a>
                </div>
              </li>
            </ul>

            <div className="contact-details__note">
              <img
                src="/icons/icon-flor.svg"
                alt=""
                className="contact-details__note-icon"
              />

              <p>
                Estamos aquí para resolver tus dudas sobre nuestras
                mieles y su origen.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="contact-closing">
        <div className="container-global contact-closing__container">
          <blockquote className="contact-closing__quote">
            Cuidamos a las abejas para que ellas cuiden de todo.
          </blockquote>

          <div
            className="contact-closing__illustration"
            aria-hidden="true"
          >
            <img
              src="/icons/icon-contacto.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contacto;