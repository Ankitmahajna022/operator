// Gender is male and age ≥ 21: He can marry
var gender = "male";
var age = 21;

if ((gender == "male") && (age >= 21)) 
{
  console.log("Male : Can Marry");
} 
else if ((gender == "female") && (age >= 18)) 
{
  console.log("Female : Can Marry");
} 
else 
{
  console.log(gender, "Can't get Marry");
}
