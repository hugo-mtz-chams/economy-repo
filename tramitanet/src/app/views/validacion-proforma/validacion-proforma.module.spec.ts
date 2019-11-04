import { ValidacionProformaModule } from './validacion-proforma.module';

describe('ValidacionProformaModule', () => {
  let validacionProformaModule: ValidacionProformaModule;

  beforeEach(() => {
    validacionProformaModule = new ValidacionProformaModule();
  });

  it('should create an instance', () => {
    expect(validacionProformaModule).toBeTruthy();
  });
});
