import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from './offer.entity';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';

@Injectable()
export class OffersService {
  constructor(@InjectRepository(Offer) private repo: Repository<Offer>) {}

  findAll() {
    return this.repo.find();
  }

  create(offerDto: CreateOfferDto) {
    const offer = this.repo.create(offerDto);

    return this.repo.save(offer);
  }
}
