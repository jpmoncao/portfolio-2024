import './styles.css';
import Form from '../Contact/Form';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-content">
        <h2 className="footer-title">Entre em contato</h2>

        <div className="footer-main">
          <aside className="footer-contact-info">
            <article>
              <img src="/icons/whatsapp.svg" alt="Ícone do Whatsapp" />
              <div>
                <h3>Whatsapp</h3>
                <p>(17) 98811-6153</p>
              </div>
            </article>
            <article>
              <img src="/icons/email.svg" alt="Ícone de Email" />
              <div>
                <h3>E-mail</h3>
                <p>pedrohojoao44@gmail.com</p>
              </div>
            </article>
          </aside>

          <Form />
        </div>

        <div className="footer-credits">
          Desenvolvido por{' '}
          <a target="_blank" rel="noreferrer" href="https://github.com/jpmoncao">
            João Pedro Monção
          </a>
        </div>
      </div>
    </footer>
  );
}
