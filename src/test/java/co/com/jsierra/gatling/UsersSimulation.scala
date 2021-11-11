package co.com.jsierra.gatling

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class UsersSimulation extends Simulation {

  def urlPattern = "GET /users"

  val getUsers = scenario("get all users").exec(karateFeature("classpath:co/com/jsierra/gatling/users.feature@name=getUsers"))
  val getUsersId = scenario("get user by id").exec(karateFeature("classpath:co/com/jsierra/gatling/users.feature@name=getUserId"))

  val protocol = karateProtocol(
    "/users" -> Nil
  )


/*  setUp(
    getUsers.inject(rampUsers(100) during (300 seconds)).protocols(protocol),
    getUsersId.inject(rampUsers(100) during (300 seconds)).protocols(protocol)
  )*/

  setUp(
    getUsers.inject(constantConcurrentUsers(PerformanceConstants.numOfUsers) during(PerformanceConstants.duration second)).protocols(protocol),
    getUsersId.inject(constantConcurrentUsers(PerformanceConstants.numOfUsers) during(PerformanceConstants.duration second)).protocols(protocol)
  ).assertions(
    details(urlPattern).responseTime.mean.lte(PerformanceConstants.mean),
      details(urlPattern).responseTime.percentile2.lte(PerformanceConstants.percentile_75),
      details(urlPattern).responseTime.percentile3.lte(PerformanceConstants.percentile_95)
  )
}

object PerformanceConstants {
  def numOfUsers = 3
  def successThreshold = 100
  def duration = 100 // in seconds

  def secondMillis = 1000
  val (mean, percentile_75, percentile_95) = {  ( ( 0.2* secondMillis).toInt,   ( 0.3* secondMillis).toInt,  ( 0.2* secondMillis).toInt) }
}

