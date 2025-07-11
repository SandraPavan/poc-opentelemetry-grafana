import { Injectable } from '@nestjs/common';
import { metrics } from './tracer';
import { log } from './infra/logger';

@Injectable()
export class AppService {
  
  getHello(): string {
    const metric = metrics.getMeter('api-service');
    const successMetric = metric.createCounter('hello_success');
    log.info('Cheguei aqui!');
    successMetric.add(1);
    return 'Hello World!';
  }
  metricTest(): string {
    const metric = metrics.getMeter('api-service');
    const errorMetric = metric.createCounter('hello_error');
    errorMetric.add(1);
    const histogram = metric.createHistogram('request_duration');
    histogram.record(1);
    return 'Metrica Adicionada';
  }
}
