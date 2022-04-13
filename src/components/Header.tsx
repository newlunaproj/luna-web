import styled from 'styled-components'

const Container = styled.header`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 25px;

  @media (min-width: 1200px) {
    padding: 0 40px;
  }

  width: 100vw;
  height: 75px;

  background-color: #181717;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div.guest-desktop {
    visibility: hidden;
  }

  @media screen and (min-width: 1280px) {
    div.guest-desktop {
      visibility: visible;
    }
  }

  h1 {
    font-family: 'Poppins';
    font-size: 1.5rem;
  }
`

function Header() {
  return (
    <Container>
      <div>
        <i className="bx bxs-moon mr-2" />
        <h1 className="font-extrabold">luna.</h1>
      </div>

      <div className="guest-desktop bg-white text-black px-7 py-2 rounded-sm">
        <a href="#">
          <button className="font-medium">Log in</button>
        </a>
      </div>

      <div className="guest-mobile">
        <i className="bx bx-menu text-3xl" />
      </div>
    </Container>
  )
}

export { Header }
