import { Test, TestingModule } from '@nestjs/testing';
import { CarreraService } from './carrera.service';

describe('CarreraService', () => {
  let service: CarreraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarreraService],
    }).compile();

    service = module.get<CarreraService>(CarreraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
