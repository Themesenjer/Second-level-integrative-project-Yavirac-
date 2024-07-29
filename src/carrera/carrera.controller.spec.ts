import { Test, TestingModule } from '@nestjs/testing';
import { CarreraController } from './carrera.controller';

describe('CarreraController', () => {
  let controller: CarreraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarreraController],
    }).compile();

    controller = module.get<CarreraController>(CarreraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
