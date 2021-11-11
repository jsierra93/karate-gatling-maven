package co.com.jsierra.gatling;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class UsersRunner {

    @Test
    void runner(){
        Results results = Runner.path("classpath:co/com/jsierra/gatling")
                .outputCucumberJson(true)
                .parallel(1);
        Assertions.assertTrue(results.getFailCount() == 0, results.getErrorMessages());
    }

}
