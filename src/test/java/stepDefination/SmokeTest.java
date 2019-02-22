package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {
	
	WebDriver driver;
	@Given("^Open Firefox$")
	public void Open_Firefox() throws Throwable{
		System.setProperty("webdriver.chrome.driver", "D:\\selenium\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com/");
	}
	
	@When("^I enter Valid Credentials$")
	public void I_enter_Valid_Credentials() throws Throwable{
		
		driver.findElement(By.id("email")).sendKeys("yoyo@gmil.com");
		driver.findElement(By.id("pass")).sendKeys("yoyo");
		
	}
	@Then("^User should be able to Login Succesfully$")
	public void User_should_be_able_to_Login_Succesfully() throws Throwable{
		
		driver.findElement(By.id("loginbutton")).click();
	
}
	
	
}
