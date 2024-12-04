-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2024 at 11:38 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mace_project_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `about1`
--

CREATE TABLE `about1` (
  `about1_id` int(11) NOT NULL,
  `about1_heading` text DEFAULT NULL,
  `about1_description` text DEFAULT NULL,
  `about1_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about1`
--

INSERT INTO `about1` (`about1_id`, `about1_heading`, `about1_description`, `about1_image`) VALUES
(1, 'OUR STORY', 'Green Souls Kitchens proudly has a decade of experience in Food Industry with a Desire & Drive for excellence in rising slowly with massive Client-ale. We have a state of art Kitchen which caters to a wide range of customers.  We provide online tiffin service in different areas such as tiffin service in Kothrud, tiffin service in Aundh, tiffin service in Baner, tiffin service in Bavdhan, tiffin service in Karve Nagar, tiffin service in Warje, tiffin service in Balewadi, tiffin service in Deccan, tiffin service in Swargate, tiffin service in Senapati Bapat Road, tiffin service in Model Colony, tiffin service in Shivaji Nagar, tiffin service in Jangali Maharaj Road, tiffin service in Law College Road, tiffin service in Paud Road, tiffin service in All Peth Areas Etc.  Our ace Chef with a robust experience & best Culinary Qualification in providing meals to match the taste buds healthily without burning a hole in the pocket.  We Cater not only Homes & Offices but also variety of Occasions with our Multi-cuisines', '1720867735825.png');

-- --------------------------------------------------------

--
-- Table structure for table `about2`
--

CREATE TABLE `about2` (
  `about2_id` int(11) NOT NULL,
  `about2_heading` text DEFAULT NULL,
  `about2_description` text DEFAULT NULL,
  `about2_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about2`
--

INSERT INTO `about2` (`about2_id`, `about2_heading`, `about2_description`, `about2_image`) VALUES
(1, 'Our Mission', 'Our Mission is to build a strong trustworthy foothold in delivering the Warmth & Care in form of Nutritious Food that will meet the needs of all over Valuable Customers & Potential Customers in region of our Delivery Network.', '1720866573725.png');

-- --------------------------------------------------------

--
-- Table structure for table `about3`
--

CREATE TABLE `about3` (
  `about3_id` int(11) NOT NULL,
  `about3_heading` text DEFAULT NULL,
  `about3_description` text DEFAULT NULL,
  `about3_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about3`
--

INSERT INTO `about3` (`about3_id`, `about3_heading`, `about3_description`, `about3_image`) VALUES
(1, 'Our Vision', 'Our Vision is to not only be amongst the Topmost leading Home, Office and Industrial Catering Service Company but also the most Trusted one’s providing a Memorable Experience.', '1720867388012.png');

-- --------------------------------------------------------

--
-- Table structure for table `aboutus_banner`
--

CREATE TABLE `aboutus_banner` (
  `banner_id` int(11) NOT NULL,
  `aboutus_heading` text DEFAULT NULL,
  `aboutus_banner_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aboutus_banner`
--

INSERT INTO `aboutus_banner` (`banner_id`, `aboutus_heading`, `aboutus_banner_image`) VALUES
(1, 'About Us', '1720865052178.png');

-- --------------------------------------------------------

--
-- Table structure for table `admin_tbl`
--

CREATE TABLE `admin_tbl` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(200) DEFAULT NULL,
  `admin_mobile` varchar(200) DEFAULT NULL,
  `admin_email` varchar(300) DEFAULT NULL,
  `admin_password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_tbl`
--

INSERT INTO `admin_tbl` (`admin_id`, `admin_name`, `admin_mobile`, `admin_email`, `admin_password`) VALUES
(1, 'parmeshwar durgist', '9657847967', 'durgistparmeshwar@gmail.com', '1234'),
(2, 'admin', '1234567890', 'admin@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL,
  `banner_image` varchar(200) DEFAULT NULL,
  `banner_heading` varchar(200) DEFAULT NULL,
  `banner_description` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`banner_id`, `banner_image`, `banner_heading`, `banner_description`) VALUES
(1, '1720446603335banner_1.jpg', 'Services we provide ....', 'Where food talks.Explore. Discuss. Enjoy....'),
(2, '1720446682597banner_1.jpg', 'Blogs', 'Every dish has a story, share yours.'),
(3, '1720446729471banner_1.jpg', 'Contact Us', 'Explore. Discuss. Enjoy...'),
(4, '1720446774145banner_1.jpg', 'For Lunch', 'Taste the Difference, Mess-Free....'),
(5, '1720446802569banner_1.jpg', 'About Us', 'The Tiffin is about that one time in millions when a box goes astray, changing lives forever.'),
(6, '1720446729471banner_1.jpg', 'For Dinner', 'Taste the Difference, Mess-Free....');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `blog_id` int(11) NOT NULL,
  `blog_title` text DEFAULT NULL,
  `blog_description` text DEFAULT NULL,
  `blog_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`blog_id`, `blog_title`, `blog_description`, `blog_image`) VALUES
(3, 'Tiffin services -a transforming industry', 'Home-cooked food is like Money,we never have a true idea of its value until we lose it', '1720278636974.png'),
(4, 'Tiffin services -a transforming industry', 'Home-cooked food is like Money,we never have a true idea of its value until we lose it', '1720278656591.png'),
(5, 'Tiffin services -a transforming industry', 'Home-cooked food is like Money,we never have a true idea of its value until we lose it', '1720278665050.png');

-- --------------------------------------------------------

--
-- Table structure for table `blog_banner`
--

CREATE TABLE `blog_banner` (
  `banner_id` int(11) NOT NULL,
  `blog_heading` text DEFAULT NULL,
  `blog_banner_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_banner`
--

INSERT INTO `blog_banner` (`banner_id`, `blog_heading`, `blog_banner_image`) VALUES
(1, 'Our Blogs', '1720277997853.png');

-- --------------------------------------------------------

--
-- Table structure for table `company_info`
--

CREATE TABLE `company_info` (
  `company_id` int(11) NOT NULL,
  `address1` text DEFAULT NULL,
  `address2` text DEFAULT NULL,
  `address3` text DEFAULT NULL,
  `contact` text DEFAULT NULL,
  `mess_name` text DEFAULT NULL,
  `mess_info` text DEFAULT NULL,
  `logo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company_info`
--

INSERT INTO `company_info` (`company_id`, `address1`, `address2`, `address3`, `contact`, `mess_name`, `mess_info`, `logo`) VALUES
(1, 'Balikashram Road,', 'Ahmednagar.', 'Maharashtra - 414001', '9011144920', 'MessHub', 'The Tiffin is about that one time in millions when a box goes astray, changing lives forever.', '1720943215686.png'),
(2, 'Balikashram Road,', 'Ahmednagar.', 'Maharashtra - 414001', '9011144920', 'MessHub', 'The Tiffin is about that one time in millions when a box goes astray, changing lives forever.', '1720164427064.png');

-- --------------------------------------------------------

--
-- Table structure for table `conact_info`
--

CREATE TABLE `conact_info` (
  `conact_info_id` int(11) NOT NULL,
  `contact_fname` text DEFAULT NULL,
  `contact_lname` text DEFAULT NULL,
  `conatct_email` text DEFAULT NULL,
  `contact_mobile` text DEFAULT NULL,
  `contact_message` text DEFAULT NULL,
  `contact_date` varchar(100) DEFAULT NULL,
  `contact_time` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `conact_info`
--

INSERT INTO `conact_info` (`conact_info_id`, `contact_fname`, `contact_lname`, `conatct_email`, `contact_mobile`, `contact_message`, `contact_date`, `contact_time`) VALUES
(3, 'Vinod', 'Thombare', 'vinodthombare752@gmail.com', '07058105025', 'hii', '05-07-2024', '10:59:06'),
(4, 'Parmeshwar', 'Durgist', 'param@gmail.com', '1234567890', 'Hii', '05-07-2024', '12:40:20'),
(5, 'Vinod', 'Thombare', 'vinodthombare752@gmail.com', '07058105025', 'hii', '05-07-2024', '16:34:19'),
(7, 'Parmeshwar', 'Durgist', 'param@gmail.com', '09657847967', 'any', '08-07-2024', '11:11:58'),
(8, 'Parmeshwar', 'Durgist', 'param1@gmail.com', '09657847967', 'hellp\r\n', '08-07-2024', '16:40:11'),
(9, '', '', '', '', '', '15-07-2024', '15:50:13'),
(10, '', '', '', '', '', '15-07-2024', '15:52:11');

-- --------------------------------------------------------

--
-- Table structure for table `conatct_address`
--

CREATE TABLE `conatct_address` (
  `conatct_address_id` int(11) NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `contact_address` text DEFAULT NULL,
  `pincode` text DEFAULT NULL,
  `contact_mobile` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `conatct_address`
--

INSERT INTO `conatct_address` (`conatct_address_id`, `company_name`, `contact_address`, `pincode`, `contact_mobile`) VALUES
(2, 'My Desigion', 'Balikashram Road , Ahmednagar', '414001', '07058105025');

-- --------------------------------------------------------

--
-- Table structure for table `contact_start_page`
--

CREATE TABLE `contact_start_page` (
  `contact_start_page_id` int(11) NOT NULL,
  `background_image` text DEFAULT NULL,
  `image_heading` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_start_page`
--

INSERT INTO `contact_start_page` (`contact_start_page_id`, `background_image`, `image_heading`) VALUES
(1, '1720242053228.png', 'Conctact Us');

-- --------------------------------------------------------

--
-- Table structure for table `home1`
--

CREATE TABLE `home1` (
  `home1_id` int(11) NOT NULL,
  `home1_heading` text DEFAULT NULL,
  `home1_title` text DEFAULT NULL,
  `home1_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home1`
--

INSERT INTO `home1` (`home1_id`, `home1_heading`, `home1_title`, `home1_image`) VALUES
(1, 'OUR MEAL PLANS', 'Happy Meal', '1720888366222.png'),
(2, '', 'Happy Mini Meal', '1720888550347.png'),
(3, '', 'Happy Medium Meal', '1720888570089.png'),
(4, '', 'Nano meal', '1720888595976.png');

-- --------------------------------------------------------

--
-- Table structure for table `home2_bg`
--

CREATE TABLE `home2_bg` (
  `home2_id` int(11) NOT NULL,
  `home2_heading` text DEFAULT NULL,
  `home2_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home2_bg`
--

INSERT INTO `home2_bg` (`home2_id`, `home2_heading`, `home2_image`) VALUES
(1, 'Our Customer Says', '1720889941473.png');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `location_id` int(11) NOT NULL,
  `location_link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `location_link`) VALUES
(1, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0520187970496!2d74.72775317418491!3d19.105373751051722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb17ca9d749e5%3A0x516744f9b2f35ec9!2sA2Z%20IT%20HUB%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1719817281260!5m2!1sen!2sin');

-- --------------------------------------------------------

--
-- Table structure for table `mess_blogs`
--

CREATE TABLE `mess_blogs` (
  `user_id` int(11) DEFAULT NULL,
  `mess_blogs_id` int(11) NOT NULL,
  `mess_blog_images` varchar(200) DEFAULT NULL,
  `mess_blog_heading` varchar(200) DEFAULT NULL,
  `mess_blog_description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mess_blogs`
--

INSERT INTO `mess_blogs` (`user_id`, `mess_blogs_id`, `mess_blog_images`, `mess_blog_heading`, `mess_blog_description`) VALUES
(1, 1, '1720672515781Blog1.jpg', 'Tiffin services -a transforming industry...', 'Home-cooked food is like Money,we never have a true idea of its value until we lose it'),
(1, 2, '1720672554819Blog2.jpg', 'Tiffin services -a transforming industry', 'Home-cooked food is like Money,we never have a true idea of its value until we lose it'),
(1, 3, '1720672587887blog3.jpg', 'THE TIFFIN HERO', 'Being a lone North Indian in a class full of Hyderabadi Telugus had its own advantages'),
(2, 4, '1720722513134Blog2.jpg', 'Tiffin services -a transforming industry', 'Being a lone North Indian in a class full of Hyderabadi Telugus had its own advantages');

-- --------------------------------------------------------

--
-- Table structure for table `mess_dinner`
--

CREATE TABLE `mess_dinner` (
  `user_id` int(11) DEFAULT NULL,
  `mess_dinner_id` int(11) NOT NULL,
  `user_admin_kyc_id` int(11) DEFAULT NULL,
  `mess_name` text DEFAULT NULL,
  `mess_images` text DEFAULT NULL,
  `mess_discription` text DEFAULT NULL,
  `mess_sunday_meal_name` text DEFAULT NULL,
  `mess_sunday_meal_img` text DEFAULT NULL,
  `mess_monday_meal_name` text DEFAULT NULL,
  `mess_monday_meal_img` text DEFAULT NULL,
  `mess_tuesday_meal_name` text DEFAULT NULL,
  `mess_tuesday_meal_img` text DEFAULT NULL,
  `mess_wednesday_meal_name` text DEFAULT NULL,
  `mess_wednesday_meal_img` text DEFAULT NULL,
  `mess_thursday_meal_name` text DEFAULT NULL,
  `mess_thursday_meal_img` text DEFAULT NULL,
  `mess_friday_meal_name` text DEFAULT NULL,
  `mess_friday_meal_img` text DEFAULT NULL,
  `mess_saturday_meal_name` text DEFAULT NULL,
  `mess_saturday_meal_img` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mess_dinner`
--

INSERT INTO `mess_dinner` (`user_id`, `mess_dinner_id`, `user_admin_kyc_id`, `mess_name`, `mess_images`, `mess_discription`, `mess_sunday_meal_name`, `mess_sunday_meal_img`, `mess_monday_meal_name`, `mess_monday_meal_img`, `mess_tuesday_meal_name`, `mess_tuesday_meal_img`, `mess_wednesday_meal_name`, `mess_wednesday_meal_img`, `mess_thursday_meal_name`, `mess_thursday_meal_img`, `mess_friday_meal_name`, `mess_friday_meal_img`, `mess_saturday_meal_name`, `mess_saturday_meal_img`) VALUES
(15, 0, 9, 'Annapurna', '1721112008947service3.jpeg', 'For dinner', 'Veg', '1721112008948service1.jpeg', 'Non veg', '1721112008948service2.jpeg', 'Jain ', '1721112008948service3.jpeg', 'Veg', '1721112008948service4.jpeg', 'Paneer Thali', '1721112008948service5.webp', 'Chicken Thali', '1721112008948service6.webp', 'Veg', '1721112008948service1.jpeg'),
(1, 1, 1, 'Param Mess', '1720935894528_menu_mess_img.jpg', 'Tiffin/Dabbawala Services Pune Group helps you find trusted home cooks with food options as per your choice of cuisine diet, taste & budget.When used in place of the word \"lunch\", tiffin often consists of rice, lentils, curry, vegetables, chapatis or \"spicy meats\".[9] In addition, the lunch boxes are themselves called tiffin carriers, tiffin-boxes or just tiffins.', 'Non-vage__', '1720931118923service3.jpeg', 'Khir', '1720931118923service4.jpeg', 'Panir', '1720931118923service5.webp', 'harbhara', '1720931118923blog3.jpg', 'mataki', '1720931118923Blog1.jpg', 'batat', '1720931118923service6.webp', 'sweets', '1720931118924service7.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `mess_lunch`
--

CREATE TABLE `mess_lunch` (
  `user_id` int(11) DEFAULT NULL,
  `mess_lunch_id` int(11) NOT NULL,
  `user_admin_kyc_id` int(11) DEFAULT NULL,
  `mess_name` text DEFAULT NULL,
  `mess_images` text DEFAULT NULL,
  `mess_discription` text DEFAULT NULL,
  `mess_sunday_meal_name` text DEFAULT NULL,
  `mess_sunday_meal_img` text DEFAULT NULL,
  `mess_monday_meal_name` text DEFAULT NULL,
  `mess_monday_meal_img` text DEFAULT NULL,
  `mess_tuesday_meal_name` text DEFAULT NULL,
  `mess_tuesday_meal_img` text DEFAULT NULL,
  `mess_wednesday_meal_name` text DEFAULT NULL,
  `mess_wednesday_meal_img` text DEFAULT NULL,
  `mess_thursday_meal_name` text DEFAULT NULL,
  `mess_thursday_meal_img` text DEFAULT NULL,
  `mess_friday_meal_name` text DEFAULT NULL,
  `mess_friday_meal_img` text DEFAULT NULL,
  `mess_saturday_meal_name` text DEFAULT NULL,
  `mess_saturday_meal_img` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mess_lunch`
--

INSERT INTO `mess_lunch` (`user_id`, `mess_lunch_id`, `user_admin_kyc_id`, `mess_name`, `mess_images`, `mess_discription`, `mess_sunday_meal_name`, `mess_sunday_meal_img`, `mess_monday_meal_name`, `mess_monday_meal_img`, `mess_tuesday_meal_name`, `mess_tuesday_meal_img`, `mess_wednesday_meal_name`, `mess_wednesday_meal_img`, `mess_thursday_meal_name`, `mess_thursday_meal_img`, `mess_friday_meal_name`, `mess_friday_meal_img`, `mess_saturday_meal_name`, `mess_saturday_meal_img`) VALUES
(1, 2, 1, 'Parmeshwar Mess', '1720833685597_menu_mess_img.jpg', 'Tiffin/Dabbawala Services Pune Group helps you find trusted home cooks with food options as per your choice of cuisine diet, taste & budget.When used in place of the word lunch, tiffin often consists of rice, lentils, curry, vegetables, chapatis or spicy meats.9 In addition, the lunch boxes are themselves called tiffin carriers, tiffin-boxes or just tiffins.', 'Non-veg ', '1720833763804_service1.jpeg', 'Khir', '1720833555185_service3.jpeg', 'Panir', '1720833763804_service3.jpeg', 'potatos', '1720833763804_service4.jpeg', 'mataki', '1720833763805_blog3.jpg', 'batat', '1720833763805_service5.webp', 'sweets', '1720851185897_service3.jpeg'),
(2, 10, 2, 'Hostel Mess', '1720848182721service7.jpg', 'Tiffin/Dabbawala Services Pune Group helps you find trusted home cooks with food options as per your choice of cuisine diet, taste & budget.When used in place of the word \"lunch\", tiffin often consists of rice, lentils, curry, vegetables, chapatis or \"spicy meats\".[9] In addition, the lunch boxes are themselves called tiffin carriers, tiffin-boxes or just tiffins.', 'Veg', '1720848182722menu_mess_img.jpg', 'shevga', '1720848182722Blog1.jpg', 'Dal Rice', '1720848182722service1.jpeg', 'harbhara', '1720848182722blog3.jpg', 'mataki', '1720848182722service6.webp', 'batat', '1720848182722service2.jpeg', 'Panir', '1720848182722service4.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `mess_service`
--

CREATE TABLE `mess_service` (
  `user_id` int(11) DEFAULT NULL,
  `mess_service_id` int(11) NOT NULL,
  `service_heading` varchar(200) DEFAULT NULL,
  `service_title` varchar(200) DEFAULT NULL,
  `service_mess_image` varchar(200) DEFAULT NULL,
  `service_mess_title` varchar(200) DEFAULT NULL,
  `service_mess_description` varchar(200) DEFAULT NULL,
  `user_admin_kyc_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mess_service`
--

INSERT INTO `mess_service` (`user_id`, `mess_service_id`, `service_heading`, `service_title`, `service_mess_image`, `service_mess_title`, `service_mess_description`, `user_admin_kyc_id`) VALUES
(1, 2, 'PARMESHWAR MESS SERVICES', 'We have an exceptional range of services to help you.', '1720459582853service1.jpeg', 'Lunch Tiffin service', 'Allow us to take care of your daily Lunch, regardless if yours at work or at home', 1),
(1, 3, '', '', '1720459883654service2.jpeg', 'Nutri-meal Lunch', 'What would you choose?stale cooked hostel food or goodness and wholeness of nutritions food?', 1),
(1, 4, '', '', '1720459917921service3.jpeg', 'Customised Tiffin', 'Yes,you can virtually design your own meals and choose from plenty of options provided buy us.', 1),
(1, 5, '', '', '1720459940135service4.jpeg', 'Corporate Catering', 'We make sure you bond well with your fellow colleagues over tastey and satiating food dishes.', 1),
(1, 6, '', '', '1720459973002service5.webp', 'Corporate Catering', 'We make sure you bond well with your fellow colleagues over tastey and satiating food dishes.', 1),
(1, 7, '', '', '1720459999190service6.webp', 'Corporate Catering', 'We make sure you bond well with your fellow colleagues over tastey and satiating food dishes.', 1),
(2, 8, 'VINOD MESS SERVICES', 'We have an exceptional range of services to help you.', '1720465489915service1.jpeg', 'Lunch Tiffin service', 'Allow us to take care of your daily Lunch, regardless if yours at work or at home', 2),
(2, 9, '', '', '1720506183888service2.jpeg', 'Nutri-meal Lunch', 'What would you choose?stale cooked hostel food or goodness and wholeness of nutritions food?', 2),
(2, 10, '', '', '1720506723067service3.jpeg', 'Customised Tiffin', 'Yes,you can virtually design your own meals and choose from plenty of options provided buy us.', 2),
(1, 12, 'undefined', 'undefined', '1720945980411service1.jpeg', 'Corporate Catering', 'Allow us to take care of your daily Lunch, regardless if yours at work or at home', 1);

-- --------------------------------------------------------

--
-- Table structure for table `mess_service1`
--

CREATE TABLE `mess_service1` (
  `mess_service1_id` int(11) NOT NULL,
  `mess_service1_img` varchar(200) DEFAULT NULL,
  `mess_service1_heading` varchar(200) DEFAULT NULL,
  `mess_service1_decription1` varchar(200) DEFAULT NULL,
  `mess_service1_decription2` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mess_service1`
--

INSERT INTO `mess_service1` (`mess_service1_id`, `mess_service1_img`, `mess_service1_heading`, `mess_service1_decription1`, `mess_service1_decription2`) VALUES
(1, '1720545473521service7.jpg', 'Food like home, Away from home', 'Green Souls Kitchens has been serving 100% Fresh and Authentic Indian Food for over a decade in the city of Pune Unlike other tiffin and catering services we  give you multiple options to choose your ', 'If you have subscribed for daily tiffin services from Green Souls Kitchens and wish to cancel your lunch, all you have to do is inform a day prior, before 10 pm and the dinner cancellation would be be'),
(2, '1720545789638service8.jpg', 'Foodie Finds, Home Delivered.....', 'Avoid the tasteless and unhealthy food served at your offices, work places or the outside food if you’re living far from your homes. Rather, order your meals from Green Souls Kitchens Just sitting fro', 'If you have subscribed for daily tiffin services from Green Souls Kitchens and wish to cancel your lunch, all you have to do is inform a day prior, before 10 pm and the dinner cancellation would be be');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL,
  `reviewer_name` text DEFAULT NULL,
  `review_desc` text DEFAULT NULL,
  `reviewer_img` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `reviewer_name`, `review_desc`, `reviewer_img`) VALUES
(1, 'Sakshi', 'Food great,The communication is great and they are quick toresolve any potential issues.they really do theirbest to keep the Customer happy.', '1720946316071.png'),
(2, 'Vinod', 'The best choice I\'ve ever model green soul kitchens saves meso much time and money. It\'s so tasty that I would say itsbetter than eat in a restaurant and more healthy.', '1720946322273.png'),
(3, 'Rohini', 'Food great, The communication is great and they are quick toresolve any potential issues. They really do theirbest to keep the Customer happy.', '1720946344864.png'),
(4, 'Parmeshwar', 'The best choice I\'ve ever model green soul kitchens saves me so much time and money. It\'s so tasty that I would say its better than eat in a restaurant and more healthy.', '1720949425874.png'),
(6, 'Kanchan', 'The best choice I\'ve ever model green soul kitchens saves me so much time and money. It\'s so tasty that I would say its better than eat in a restaurant and more healthy.', '1720946295281.png');

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `slider_id` int(11) NOT NULL,
  `slider_title` text DEFAULT NULL,
  `slider_subtitle` text DEFAULT NULL,
  `slider_info` text DEFAULT NULL,
  `slider_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`slider_id`, `slider_title`, `slider_subtitle`, `slider_info`, `slider_image`) VALUES
(1, 'Eat healthylive better', 'Swad Bhara Khana Rozana', 'You can get the best homemade foodfrom Green Souls Kitchens.The foodwill be full of soul,health,& taste.', '1720888040871.png');

-- --------------------------------------------------------

--
-- Table structure for table `user_admin_kyc`
--

CREATE TABLE `user_admin_kyc` (
  `user_id` int(11) DEFAULT NULL,
  `user_admin_kyc_id` int(11) NOT NULL,
  `user_admin_fname` varchar(200) DEFAULT NULL,
  `user_admin_lname` varchar(200) DEFAULT NULL,
  `user_admin_email` varchar(200) DEFAULT NULL,
  `user_admin_phone` varchar(200) DEFAULT NULL,
  `user_admin_photo` varchar(200) DEFAULT NULL,
  `user_admin_address` text DEFAULT NULL,
  `user_admin_mess_name` varchar(200) DEFAULT NULL,
  `user_admin_mess_photo` varchar(200) DEFAULT NULL,
  `user_admin_mess_area` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_admin_kyc`
--

INSERT INTO `user_admin_kyc` (`user_id`, `user_admin_kyc_id`, `user_admin_fname`, `user_admin_lname`, `user_admin_email`, `user_admin_phone`, `user_admin_photo`, `user_admin_address`, `user_admin_mess_name`, `user_admin_mess_photo`, `user_admin_mess_area`) VALUES
(11, 6, 'Sandesh', 'Kshetre', 'sandesh@gmail.co', '1234567890', '1719983642714(4304) Lecture 8 _ Events in JavaScript _ JavaScript Full Course - YouTube - Google Chrome 6_25_2024 12_22_19 PM.png', '', 'e4e2', '1719983642714(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_08_54 PM.png', 'Savidi Area');

-- --------------------------------------------------------

--
-- Table structure for table `user_admin_kyc_complated`
--

CREATE TABLE `user_admin_kyc_complated` (
  `user_id` int(11) DEFAULT NULL,
  `user_admin_kyc_id` int(11) NOT NULL,
  `user_admin_fname` varchar(200) DEFAULT NULL,
  `user_admin_lname` varchar(200) DEFAULT NULL,
  `user_admin_email` varchar(200) DEFAULT NULL,
  `user_admin_phone` varchar(200) DEFAULT NULL,
  `user_admin_photo` varchar(200) DEFAULT NULL,
  `user_admin_address` text DEFAULT NULL,
  `user_admin_mess_name` varchar(200) DEFAULT NULL,
  `user_admin_mess_photo` varchar(200) DEFAULT NULL,
  `user_admin_mess_area` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_admin_kyc_complated`
--

INSERT INTO `user_admin_kyc_complated` (`user_id`, `user_admin_kyc_id`, `user_admin_fname`, `user_admin_lname`, `user_admin_email`, `user_admin_phone`, `user_admin_photo`, `user_admin_address`, `user_admin_mess_name`, `user_admin_mess_photo`, `user_admin_mess_area`) VALUES
(1, 1, 'Parmeshwar', 'Durgist', 'durgistparmeshwar@gmail.com', '9657847967', '1720077793470IMG_20230131_094508.jpg', 'chanda Ta.newasa Julia A.nagar', 'param mess', '172007779347020220328_115352.jpg', 'Balika Ashram Road Area'),
(2, 2, 'vinod ', 'thombare', 'abcd@gmail.com', '8745877458', '1719982031839Thank You - Sourcedesk Global - Google Chrome 7_2_2024 5_11_06 PM.png', 'Kautha Ta.newasa Julia A.nagar', 'Hostel boyz mace am', '1719982031839(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_28_12 PM.png', 'Balika Ashram Road Area'),
(10, 4, 'mahesh', 'bhingare', 'mahesh@gmail.com', '9356569310', '1719983431486Online Test Window - Google Chrome 6_23_2024 12_21_08 PM.png', 'Kautha Ta.newasa Julia A.nagar', 'Hostel boyz mace ', '1719983431486(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_08_54 PM.png', 'Savidi Area'),
(13, 8, 'rutuja  ', 'walke', 'rutu@gmail.com', '872387723', '1720094178355(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_27_00 PM.png', 'ahmednagar ', 'rutuja mess', '1720094178355(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_30_59 PM.png', 'Balika Ashram Road Area'),
(15, 9, 'Rohini', 'Khade', 'rohini@gmail.com', '1234567891', '1720154721291(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_08_54 PM.png', 'punekar', 'rohini mess', '1720154721291(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 4_03_26 PM.png', 'Balika Ashram Road Area'),
(16, 10, 'pavan', 'sawant', 'pavan@gmail.com', '929838273', '1720504293379service1.jpeg', 'ahmednagar ', 'A2Z MESS', '1720504293379service2.jpeg', 'Balika Ashram Road Area');

-- --------------------------------------------------------

--
-- Table structure for table `user_admin_mess_details`
--

CREATE TABLE `user_admin_mess_details` (
  `user_id` int(11) DEFAULT NULL,
  `user_admin_mess_details_id` int(11) NOT NULL,
  `user_admin_mess_name` varchar(299) DEFAULT NULL,
  `user_admin_mess_info` text DEFAULT NULL,
  `user_admin_mess_area` varchar(299) DEFAULT NULL,
  `user_admin_mess_photo` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_admin_mess_details`
--

INSERT INTO `user_admin_mess_details` (`user_id`, `user_admin_mess_details_id`, `user_admin_mess_name`, `user_admin_mess_info`, `user_admin_mess_area`, `user_admin_mess_photo`) VALUES
(1, 2, 'Hostel boyz mace 1', 'abc 1', 'Balika Ashram Road Area', '1720190291800(1) Top job picks for you _ LinkedIn - Google Chrome 7_1_2024 4_49_48 PM.png'),
(2, 3, 'am hostel mace', 'xyz', 'Paip Line Road Area', '1720176058971(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_28_11 PM.png'),
(0, 4, 'Hostel boyz mace ', 'abc', '', NULL),
(16, 5, 'A2Z MESS', 'abc', 'Balika Ashram Road Area', '1720520946964Java Currency Formatter _ HackerRank - Google Chrome 1_1_2024 11_16_11 AM.png');

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE `user_tbl` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(200) DEFAULT NULL,
  `mobile_number` varchar(200) DEFAULT NULL,
  `user_email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`user_id`, `user_name`, `mobile_number`, `user_email`, `password`) VALUES
(1, 'parmeshwar durgist', '9657847967', 'durgistparmeshwar@gmail.com', '123456'),
(2, 'Vinod ', '7058105025', 'abcd@gmail.com', '123'),
(10, 'mahesh', '9356569310', 'mahesh@gmail.com', '123'),
(11, 'sandesh', '1234567890', 'sandesh@gmail.com', '123'),
(12, 'prasadh durgist', '0987654321', 'durgistprasadh@gmail.com', '123'),
(13, 'rutuja walke ', '872387723', 'rutu@gmail.com', '123'),
(14, 'xyz', '1111111111', 'xyz@gmail.com', '123456'),
(15, 'rohini khade ', '1234567891', 'rohini@gmail.com', '1234'),
(16, 'pavan sawant', '929838273', 'pavan@gmail.com', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_tbl`
--
ALTER TABLE `admin_tbl`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`banner_id`);

--
-- Indexes for table `conact_info`
--
ALTER TABLE `conact_info`
  ADD PRIMARY KEY (`conact_info_id`);

--
-- Indexes for table `conatct_address`
--
ALTER TABLE `conatct_address`
  ADD PRIMARY KEY (`conatct_address_id`);

--
-- Indexes for table `contact_start_page`
--
ALTER TABLE `contact_start_page`
  ADD PRIMARY KEY (`contact_start_page_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `mess_blogs`
--
ALTER TABLE `mess_blogs`
  ADD PRIMARY KEY (`mess_blogs_id`);

--
-- Indexes for table `mess_dinner`
--
ALTER TABLE `mess_dinner`
  ADD PRIMARY KEY (`mess_dinner_id`);

--
-- Indexes for table `mess_lunch`
--
ALTER TABLE `mess_lunch`
  ADD PRIMARY KEY (`mess_lunch_id`);

--
-- Indexes for table `mess_service`
--
ALTER TABLE `mess_service`
  ADD PRIMARY KEY (`mess_service_id`);

--
-- Indexes for table `mess_service1`
--
ALTER TABLE `mess_service1`
  ADD PRIMARY KEY (`mess_service1_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`);

--
-- Indexes for table `user_admin_kyc`
--
ALTER TABLE `user_admin_kyc`
  ADD PRIMARY KEY (`user_admin_kyc_id`);

--
-- Indexes for table `user_admin_kyc_complated`
--
ALTER TABLE `user_admin_kyc_complated`
  ADD PRIMARY KEY (`user_admin_kyc_id`);

--
-- Indexes for table `user_admin_mess_details`
--
ALTER TABLE `user_admin_mess_details`
  ADD PRIMARY KEY (`user_admin_mess_details_id`);

--
-- Indexes for table `user_tbl`
--
ALTER TABLE `user_tbl`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_tbl`
--
ALTER TABLE `admin_tbl`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `conact_info`
--
ALTER TABLE `conact_info`
  MODIFY `conact_info_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `conatct_address`
--
ALTER TABLE `conatct_address`
  MODIFY `conatct_address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contact_start_page`
--
ALTER TABLE `contact_start_page`
  MODIFY `contact_start_page_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `mess_service`
--
ALTER TABLE `mess_service`
  MODIFY `mess_service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `mess_service1`
--
ALTER TABLE `mess_service1`
  MODIFY `mess_service1_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_admin_kyc`
--
ALTER TABLE `user_admin_kyc`
  MODIFY `user_admin_kyc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user_admin_kyc_complated`
--
ALTER TABLE `user_admin_kyc_complated`
  MODIFY `user_admin_kyc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user_admin_mess_details`
--
ALTER TABLE `user_admin_mess_details`
  MODIFY `user_admin_mess_details_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_tbl`
--
ALTER TABLE `user_tbl`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
