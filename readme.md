# POC OpenTelemetry com Grafana Stack

Este projeto é uma prova de conceito (POC) para demonstrar a integração do OpenTelemetry com o Grafana Stack para monitoramento e observabilidade.

## Pré-requisitos

- Docker
- Docker Compose

## Serviços

O projeto utiliza os seguintes serviços:

- **Grafana**: Ferramenta de visualização e monitoramento de métricas.
- **Loki**: Sistema de agregação de logs.
- **Tempo**: Sistema de rastreamento distribuído (tracing).
- **Mimir**: Sistema de métricas baseado no Prometheus.
- **OpenTelemetry Collector**: Coletor de métricas, logs e traces.
- **Promtail**: Agente de coleta de logs.

## Como executar

1. Certifique-se de que o Docker e o Docker Compose estão instalados em sua máquina.
2. Clone este repositório.
3. Navegue até o diretório do projeto.
4. Execute o comando abaixo para iniciar os serviços:

   ```bash
   docker-compose up -d
   ```

5. Acesse o Grafana no navegador em: [http://localhost:3000](http://localhost:3000).

## Configuração dos Serviços

### Grafana

O Grafana está configurado para permitir acesso anônimo e já possui datasources configurados para Loki, Tempo e Mimir. O arquivo de configuração está localizado em `config/grafana/datasources.yaml`.

### OpenTelemetry Collector

O OpenTelemetry Collector está configurado para receber dados via OTLP e exportá-los para Loki, Tempo e Mimir. O arquivo de configuração está em `config/otel/otel.yaml`.

### Tempo

O Tempo está configurado para armazenar traces localmente e enviar métricas para o Mimir. O arquivo de configuração está em `config/tempo/tempo.yaml`.

### Mimir

O Mimir está configurado para armazenamento local de métricas. O arquivo de configuração está em `config/mimir/mimir.yaml`.

## Observabilidade

- **Logs**: Coletados pelo Promtail e enviados para o Loki.
- **Traces**: Coletados pelo OpenTelemetry e enviados para o Tempo.
- **Métricas**: Coletadas pelo OpenTelemetry e enviadas para o Mimir.

## Próximos Passos

- Criar dashboards personalizados no Grafana.
- Integrar mais serviços para observabilidade.
- Configurar autenticação no Grafana para ambientes de produção.

## Licença

Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.