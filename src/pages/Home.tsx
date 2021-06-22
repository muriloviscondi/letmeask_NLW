import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home() {
  return (
    <div>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire suas dúvidas de sua audiência em tempo real</p>
      </aside>
      <main>
        <div>
          <img
            src={logoImg}
            alt="imagem do logo escrito let me ask com um desenho de balão de diálogo"
          />
          <button>
            <img src={googleIconImg} alt="Logo do google" />
            Crie sua sala com o google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
}
