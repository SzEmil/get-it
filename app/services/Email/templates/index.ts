import { wrapper } from "./wrapper";
export const EmailTemplate = {
  onError: (message: string) =>
    wrapper(`
    <div>
      <h1>Błąd w aplikacji minfcomerence</h1>
      <div style="display: flex; gap: 10">
        <p>Treść wiadomości:</p>
        <p>${message}</p>
      </div>
    </div>  
    `),

  onCustomer: (customer: string, message: string) =>
    wrapper(` <div>
      <h1>Wiadomość od klienta</h1>
      <div style="display: flex; gap: 10">
        <p>Imię klienta:</p>
        <p>${customer}</p>
     </div>
      <div style="display: flex; gap: 10">
        <p>Treść wiadomości:</p>
        <p>${message}</p>
       </div>
    </div>`),
};
