import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EmissionsForm from './EmissionsForm';

describe('Test the Emission Table', () => {
  test('Displays Error Message for potentially dangerous input', async () => {
    render(<EmissionsForm />);

    const inputField = screen.getByTestId('searchTag');
    
    // Gibt in der Form einen Beispiel für potentiell gefährliches Code
    fireEvent.change(inputField, { target: { value: "<script>alert('I have just inputted dangerous code!')</script>" }});

    // Sucht den GO Button und, falls vorhanden, triggert ihn
    const submitButton = screen.queryByTestId('go-button'); // gibt null aus, falls der Button nicht da ist
    if (submitButton) {
      fireEvent.click(submitButton);
    }

    // Asynchron
    await waitFor(() => {
    
    // Der GO Button ist so programmiert, dass es verschwindet, wenn die Fehlermeldung erscheint
    // Deswegen checkt der Test, ob der GO-Button auch tatsächlich verschwunden ist
    // expect(screen.queryByTestId('go-button')).toBeNull();

    // Checkt ob EmissionsForm tatsächlich die erwartete Fehlermeldung ausgibt
    // Dies geschieht asynchron. So ist auch die Einbindung von Server-Fehlermeldungen gedeckt.
    const errorMessage = screen.getByTestId('error-message');
    expect(errorMessage).toHaveTextContent('Invalid input. Try again');
  });

});
});
