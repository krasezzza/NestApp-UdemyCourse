import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { OffersService } from './offers.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('offers')
export class OffersController {
  constructor(private offersService: OffersService) {}

  @Get()
  findAllOffers() {
    return this.offersService.findAll();
  }

  @Post('create')
  @UseGuards(AuthGuard)
  createOffer(@Body() body: CreateOfferDto) {
    console.log('body offers', body);
    return this.offersService.create(body);
  }
}
