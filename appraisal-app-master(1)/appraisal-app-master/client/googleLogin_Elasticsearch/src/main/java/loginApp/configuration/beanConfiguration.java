package loginApp.configuration;
import io.searchbox.client.JestClient;
import io.searchbox.client.JestClientFactory;
import io.searchbox.client.config.HttpClientConfig;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.TransportAddress;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;

import java.io.IOException;
import java.net.InetAddress;

@Configuration
@EnableElasticsearchRepositories(basePackages = "loginApp")
public class beanConfiguration {

        @Autowired
        AppContext appContext;

       @Bean
        public ElasticsearchOperations elasticsearchTemplate() throws Exception {
            return new ElasticsearchTemplate(client());
        }

        @Bean
        public Client client() throws IOException {

            System.setProperty("es.set.netty.runtime.available.processors", "false");

            Settings esSettings = Settings.builder()
                    .put("cluster.name", "elasticsearch")
                    .build();
            TransportClient client = new PreBuiltTransportClient(esSettings);

            client.addTransportAddress(new TransportAddress(InetAddress.getByName("localhost"), 9300));

            return client;
        }


        /**
         * Client client.
         *
         * @return the client
         * @throws IOException the io exception
         */
        @Bean
        public JestClient jestClient() {

            JestClientFactory factory = new JestClientFactory();
            factory.setHttpClientConfig(new HttpClientConfig
                    .Builder(appContext.getElasticsearchbaseurl())
                    .multiThreaded(true)
                    .build());
            return factory.getObject();
        }

    }
