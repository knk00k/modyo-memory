import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CongratsComponent } from './congrats.component';

describe('CongratsComponent', () => {
  let component: CongratsComponent;
  let fixture: ComponentFixture<CongratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CongratsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the player name in the modal title', () => {
    component.playerName = 'John Doe';
    fixture.detectChanges();

    const modalTitle = fixture.nativeElement.querySelector('.modal-title');
    expect(modalTitle.textContent).toContain('¡ Felicitaciones John Doe !');
  });

  it('should display a congratulatory message', () => {
    const modalMessage = fixture.nativeElement.querySelector('.modal-message');
    expect(modalMessage.textContent).toContain('Has adivinado todas las cartas :)');
  });

  it('should have an "Aceptar" button', () => {
    const acceptButton = fixture.nativeElement.querySelector('.btn.btn__modyo-success');
    expect(acceptButton).toBeTruthy();
    expect(acceptButton.textContent).toContain('Aceptar');
  });

  // it('should close the modal when "Aceptar" button is clicked', () => {
  //   // Asegúrate de que el modal esté presente antes de hacer clic en el botón
  //   const modalElement = fixture.nativeElement.querySelector('#congratsModal');
  //   expect(modalElement).toBeTruthy();
  
  //   // Simula el clic en el botón "Aceptar"
  //   const acceptButton = fixture.nativeElement.querySelector('.btn.btn__modyo-success');
  //   acceptButton.click();
  //   fixture.detectChanges();
  
  //   // Verifica que el modal ya no esté presente en el DOM
  //   const modalAfterClose = fixture.nativeElement.querySelector('#congratsModal');
  //   expect(modalAfterClose).toBeFalsy();
  // });

});
