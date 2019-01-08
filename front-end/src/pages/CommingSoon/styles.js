import styled from 'styled-components'

export const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .centerElement {
    padding: 15px;
    .countDown {
      h2 {
        font-size: 3rem;
        letter-spacing: 6px;
        text-align: center;
        color: var(--color-light);
      }
      .spacer {
        width: 100px !important;
        display: inline-block;
        text-align: center;
      }
      .dot {
        color: var(--color-1);
        font-size: 7rem;
      }
      @media (max-width: 600px) {
        h2 {
          font-size: 2rem;
        }
        .spacer {
          width: 70px !important;
        }
        .dot {
          font-size: 5rem;
        }
      }
      @media (max-width: 400px) {
        h2 {
          font-size: 1.5rem;
        }
        .spacer {
          width: 60px !important;
        }
        .dot {
          font-size: 4rem;
        }
      }
    }
  }
`
