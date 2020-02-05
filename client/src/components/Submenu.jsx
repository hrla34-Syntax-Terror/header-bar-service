import React, { Component } from 'react';
import SectionActions from './SectionActions.jsx';
import Submenu2 from './Submenu2.jsx';
import ExploreItem from './ExploreItem.jsx';

class Submenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: {
        campHikeVis: false,
        climbVis: false,
        cycleVis: false,
        paddleVis: false,
        runVis: false,
        snowVis: false,
        travelVis: false,
        yogaVis: false,
        menVis: false,
        womenVis: false,
        kidsVis: false,
        dealsVis: false,
        moreVis: false,
      },
    // #region submenuitems 
      campHikeSubmenu: [
        { title: 'Backpacks', items: ['Backpacking Packs', 'Day Packs', 'Hydration Packs', 'Baby Carrier Packs', 'Waist Packs', 'Accessories'] },
        { title: 'Tents', items: ['Backpacking Tents', 'Camping Tents', 'Roof-top Tents', 'Shelters', 'Bivy Sacks', 'Accessories'] },
        { title: 'Sleeping Bags', items: ['Men\'s', 'Women\'s', 'Double', 'Kids\'', 'Bag Liners', 'Blankets'] },
        { title: 'Pads & Hammocks', items: ['Sleeping Pads', 'Hammocks', 'Cots', 'Air Mattresses', 'Pillows'] },
        { title: 'Camp Kitchen', items: ['Stoves', 'Cookware', 'Dinnerware', 'Coffee & Tea', 'Utensils', 'Coolers', 'Food'] },
        { title: 'Camp Furniture', items: ['Chairs', 'Hammocks', 'Tables', 'Fire Pits'] },
        { title: 'Water', items: ['Glasses, Cups & Mugs', 'Water Bottles', 'Water Treatment', 'Hydration Reservoirs', 'Vacuum Bottles'] },
        { title: 'Lighting', items: ['Headlamps', 'Flashlights', 'Lanterns'] },
        { title: 'Electronics', items: ['GPS', 'Portable Power Devices', 'Radios', 'Watches', 'Two-Way Radios', 'PLB & Satellite Messengers', 'Solar Chargers', 'Portable Speakers'] },
        { title: 'Gadgets & Gear', items: ['Trekking Poles', 'Knives', 'Binoculars', 'Compasses', 'Multi-Tools', 'Camp Tools'] },
        { title: 'Hiking Footwear', items: ['Men\'s', 'Women\'s', 'Kids\'', 'Hiking Socks', 'Gaiters'] },
        { title: 'Hiking Clothing', items: ['Jackets', 'Shirts', 'Pants', 'Shorts', 'Hats & Accessories', 'Sunglasses'] },
        { title: 'Health & Safety', items: ['First Aid', 'Emergency & Survival', 'Camp Bathroom', 'Bear Safety Gear', 'Fire Starting Gear', 'Sun & Bug Protection'] },
        { title: 'Accessories', items: ['Dog Gear', 'Storage & Maintenance', 'Games & Toys', 'Maps'] },
        { title: 'Camp & Hike Deals', items: ['Tent Deals', 'Sleeping Bag Deals', 'Backpack Deals', 'REI Outlet Camp & Hike'] }
      ],
      climbSubmenu: [
        { title: 'Climbing Shoes', items: ['Men’s Climbing', 'Men\'s Approach', 'Women\'s Climbing', 'Women\'s Approach'] },
        { title: 'Climbing Harnesses', items: ['Men’s', 'Women’s', 'Kids\''] },
        { title: 'Climbing Ropes', items: ['Single Ropes', 'Static & Rescue', 'Half Ropes', 'Twin Ropes', 'Rope Bags'] },
        { title: 'Webbing & Cords', items: ['Cords', 'Slings', 'Webbing', 'Slacklines'] },
        { title: 'Hardware', items: ['Carabiners', 'Protection', 'Quickdraws', 'Pulleys', 'Belay & Rappel', 'Ascenders & Descenders'] },
        { title: 'Essentials', items: ['Chalk', 'Helmets', 'Packs', 'Training Gear', 'Holds', 'Bouldering Crash Pads'] },
        { title: 'Climbing Clothing', items: ['Men’s Rock', 'Men’s Mountaineering', 'Women’s Rock', 'Women\'s Mountaineering', 'Rappelling Gloves'] },
        { title: 'Mountaineering', items: ['Crampons', 'Ice Axes & Tools', 'Mountaineering Boots', 'Mountaineering Tents', 'Snow & Ice Protection'] },
        { title: 'Climbing Deals', items: ['Climbing Shoe Deals', 'Climbing Harness Deals', 'REI Outlet Climbing'] }
      ],
      cycleSubmenu: [
        { title: 'Bikes', items: ['Mountain Bikes', 'Road Bikes', 'Hybrid Bikes', 'Electric Bikes', 'Specialty Bikes', 'Kids\' Bikes'] },
        { title: 'Bike Helmets', items: ['Mountain', 'Road', 'Recreational', 'Kids\''] },
        { title: 'Cycling Clothing', items: ['Jackets', 'Jerseys', 'Shorts', 'Tights & Pants', 'Accessories'] },
        { title: 'Cycling Shoes', items: ['Mountain', 'Road', 'City', 'Cleats', 'Cycling Socks'] },
        { title: 'Packs, Bags & Trailers', items: ['Panniers & Bike Bags', 'Packs & Messengers', 'Bike Trailers', 'Bike Cargo Racks'] },
        { title: 'Bike Accessories', items: ['Computers', 'Lights', 'Locks', 'Pumps', 'Trainers', 'Water Bottles', 'Fenders'] },
        { title: 'Bike Racks', items: ['Hitch-mounted', 'Roof-top', 'Trunk-mounted', 'Truck Bed', 'Bike Storage Racks'] },
        { title: 'Bike Components', items: ['Tires, Tubes & Wheels', 'Pedals', 'Brakes', 'Drivetrain Components', 'Handlebars', 'Saddles & Seat Posts'] }
      ],
      paddleSubmenu: [
        { title: 'Kayaks', items: ['Touring', 'Day-touring', 'Recreational', 'Sit-On-Top', 'Inflatable', 'Tandem'] },
        { title: 'Kayaking Gear', items: ['Paddles', 'Carts', 'Accessories', 'Safety Equipment', 'Spray Skirts', 'Kayak Storage'] },
        { title: 'Paddle Boarding', items: ['Paddle Boards', 'Paddles', 'Accessories'] },
        { title: 'Canoeing', items: ['Canoes', 'Paddles', 'Accessories'] },
        { title: 'PFDs', items: ['Men’s', 'Women’s', 'Kids’'] },
        { title: 'Paddling Clothing', items: ['Wetsuits', 'Dry Suits', 'Paddling Jackets', 'Pants', 'Rashguards', 'Gloves'] },
        { title: 'Paddling Footwear', items: ['Booties', 'Socks'] },
        { title: 'Bags & Cases', items: ['Dry Bags', 'Waterproof Cases', 'Canoe Packs'] },
        { title: 'Accessories', items: ['Fishing Gear', 'Safety Gear', 'Snorkeling', 'Rafts & Tubes', 'Car Racks'] },
        { title: 'Car Racks', items: ['Kayak Racks', 'Canoe Racks', 'Paddle Board Racks'] },
        { title: 'Paddling Deals', items: ['Kayaking Deals', 'Paddle Board Deals', 'Paddle Clothing Deals', 'REI Outlet Paddling'] },
      ],
      runSubmenu: [
        { title: 'Men\'s Running Shoes', items: ['Trail-Running', 'Road-Running', 'Cross-Training', 'Insoles', 'Running Socks'] },
        { title: 'Men\'s Running Clothing', items: ['Jackets', 'Vests', 'Shirts', 'Shorts', 'Pants & Tights', 'Accessories'] },
        { title: 'Women\'s Running Shoes', items: ['Trail-Running', 'Road-Running', 'Cross-Training', 'Insoles', 'Running Socks'] },
        { title: 'Women\'s Running Clothing', items: ['Jackets', 'Vests', 'Shirts', 'Sports Bras', 'Shorts', 'Pants & Tights', 'Accessories'] },
        { title: 'Injury Prevention & Recovery', items: ['Foam Rollers', 'Massagers', 'Support Braces & Tape'] },
        { title: 'Electronics', items: ['Activity Trackers', 'Heart Rate Monitors', 'GPS Sports Watches', 'Running Watches', 'Headphones'] },
        { title: 'Running Packs', items: ['Hydration Belts', 'Hydration Vests & Packs', 'Race Belts', 'Water Bottles'] },
        { title: 'Accessories', items: ['Energy Food & Drinks', 'Reflective Gear', 'Running Lights', 'Sport Sunglasses'] },
        { title: 'Run Deals', items: ['Men’s Clothing Deals', 'Men’s Shoe Deals', 'Women’s Clothing Deals', 'Women’s Shoe Deals', 'REI Outlet Running'] },
      ],
      snowSubmenu: [
        { title: 'Downhill Skiing', items: ['Skis', 'Boots', 'Bindings', 'Poles', 'Goggles', 'Helmets', 'Packs & Bags', 'Accessories'] },
        { title: 'Downhill Ski Clothing', items: ['Men’s', 'Women’s', 'Kids’', 'Gloves, Hats & Socks'] },
        { title: 'Snowboarding', items: ['Snowboards', 'Boots', 'Bindings', 'Goggles', 'Helmets', 'Packs & Bags', 'Accessories'] },
        { title: 'Snowboard Clothing', items: ['Men’s', 'Women’s', 'Kids’', 'Gloves, Hats & Socks'] },
        { title: 'Snowshoeing', items: ['Snowshoes', 'Winter Boots', 'Accessories'] },
        { title: 'Backcountry Skiing', items: ['Skis', 'Boots', 'Bindings', 'Poles', 'Climbing Skins', 'Ski Packs'] },
        { title: 'Cross-Country Skiing', items: ['Skis', 'Boots', 'Bindings', 'Poles', 'Waxing & Tuning'] },
        { title: 'Cross-Country Clothing', items: ['Men’s', 'Women’s'] },
        { title: 'Avalanche Safety Gear', items: ['Avalanche Packs', 'Avalanche Transceivers', 'Snow Shovels', 'Snow Probes'] },
        { title: 'Snow Accessories', items: ['Action Cameras', 'Hand & Foot Warmers', 'Winter Traction'] },
        { title: 'Snow Deals', items: ['Downhill Skiing Deals', 'Backcountry Ski Deals', 'XC Skiing Deals', 'Snowboarding Deals', 'Snowshoeing Deals', 'REI Outlet Snow'] },
      ],
      travelSubmenu: [
        { title: 'Luggage', items: ['Carry-On Luggage', 'Wheeled Luggage', 'Travel Packs', 'Travel Duffels', 'Packing Organizers', 'Accessories'] },
        { title: 'Day Bags', items: ['Duffel Bags', 'Shoulder Bags', 'Messenger Bags', 'Tote Bags', 'Wallets & Money Belts'] },
        { title: 'Backpacks', items: ['Travel Backpacks', 'Travel Daypacks', 'Computer Backpacks'] },
        { title: 'REI Adventures Trips', items: ['Africa', 'Antarctica', 'Asia', 'Australia & New Zealand', 'Central America', 'Europe', 'North America', 'South America', 'US National Parks'] },
        { title: 'Car Racks', items: ['Cargo Boxes & Bags', 'Bike Racks', 'Watercraft Racks', 'Ski & Snowboard', 'Base Roof Racks'] },
        { title: 'Travel Clothing', items: ['Men’s', 'Women’s', 'Kids’'] },
        { title: 'Electronics Bags & Cases', items: ['Computer Bags', 'Camera Bags', 'Phone Cases'] },
        { title: 'Specialty Trips', items: ['Family Trips', 'Signature Camping', 'Women\'s Adventures', 'Volunteer Vacations'] },
        { title: 'Travel Accessories', items: ['Pillows & Sleeping', 'Converters & Adapters', 'Keychains', 'Portable Power Devices', 'Toiletry Bags', 'Travel Mugs'] },
        { title: 'Photography', items: ['Action Cameras', 'Camera Bags'] },
        { title: 'Travel Deals', items: ['Luggage Deals', 'Backpack Deals', 'Day Bag Deals', 'Travel Clothing Deals', 'REI Outlet Travel'] },

      ],
      yogaSubmenu: [
        { title: 'Women’s Yoga Clothing', items: ['Shirts', 'Sports Bras', 'Pants', 'Shorts', 'Plus Size'] },
        { title: 'Men’s Yoga Clothing', items: ['Shirts', 'Pants', 'Shorts'] },
        { title: 'Yoga Gear', items: ['Yoga Mats', 'Mat Bags', 'Mat Holders', 'Props', 'Towels'] },
        { title: 'Injury Prevention & Recovery', items: ['Foam Rollers', 'Massagers', 'Support Braces'] },
        { title: 'Fitness Electronics', items: ['Activity Trackers', 'Heart Rate Monitors', 'GPS Sports Watches', 'Running Watches', 'Headphones'] },
        { title: 'Accessories', items: ['Food & Drink', 'Water Bottles', 'Gym Bags'] },
        { title: 'Yoga Deals', items: ['Women’s Deals', 'Men’s Deals', 'Yoga Gear Deals', 'REI Outlet Yoga'] }
      ],
      menSubmenu: [
        { title: 'Footwear', items: ['Boots', 'Shoes', 'Sandals', 'Slippers', 'Insoles', 'Socks'] },
        { title: 'Jackets', items: ['Casual Jackets', 'Down & Insulated', 'Fleece & Soft-Shell', 'Rain Jackets', 'Running Jackets', 'Wind Shells', 'Ski & Snowboard'] },
        { title: 'Tops', items: ['Shirts', 'Sweaters & Hoodies', 'Vests'] },
        { title: 'Bottoms', items: ['Pants', 'Shorts'] },
        { title: 'Underwear', items: ['Briefs & Boxers', 'Base Layer Tops', 'Base Layer Bottoms'] },
        { title: 'Swimwear', items: ['Swim Trunks', 'Rashguards', 'Goggles'] },
        { title: 'Accessories', items: ['Hats', 'Gloves & Mittens', 'Belts', 'Gaiters', 'Scarves & Headbands'] },
        { title: 'More', items: ['Sunglasses', 'Watches', 'Big, Tall & Short', 'Big', 'Tall', 'Short'] },
        { title: 'By Activity', items: ['Hiking Clothing', 'Cycling Clothing', 'Running Clothing', 'Ski Clothing', 'Snowboard Clothing', 'Travel Clothing', 'Yoga Clothing'] },
        { title: 'Men’s Deals', items: ['Jackets Deals', 'Shirts Deals', 'Pants Deals', 'Footwear Deals', 'REI Outlet Men’s Clothing', 'REI Outlet Men’s Footwear'] }
      ],
      womenSubmenu: [
        { title: 'Footwear', items: ['Boots', 'Shoes', 'Sandals', 'Slippers', 'Insoles', 'Socks'] },
        { title: 'Jackets', items: ['Casual Jackets', 'Down & Insulated', 'Fleece & Soft-Shell', 'Rain Jackets', 'Running Jackets', 'Wind Shells', 'Ski & Snowboard'] },
        { title: 'Tops', items: ['Shirts', 'Sweaters & Hoodies', 'Vests'] },
        { title: 'Bottoms', items: ['Pants', 'Shorts'] },
        { title: 'Skirts & Dresses', items: ['Dresses', 'Skirts', 'Skorts'] },
        { title: 'Underwear', items: ['Briefs', 'Sports Bras', 'Base Layer Tops', 'Base Layer Bottoms'] },
        { title: 'Swimwear', items: ['Swimsuits', 'Rashguards', 'Water Shorts', 'Cover Ups', 'Goggles'] },
        { title: 'Accessories', items: ['Hats', 'Gloves & Mittens', 'Belts', 'Gaiters', 'Scarves & Headbands'] },
        { title: 'More', items: ['Sunglasses', 'Watches', 'Bags'] },
        { title: 'Plus, Petite and Tall', items: ['Plus', 'Petite', 'Tall'] },
        { title: 'By Activity', items: ['Hiking Clothing', 'Cycling Clothing', 'Running Clothing', 'Ski Clothing', 'Snowboard Clothing', 'Travel Clothing', 'Yoga Clothing'] },
        { title: 'Women’s Deals', items: ['Jackets Deals', 'Shirts Deals', 'Pants Deals', 'Footwear Deals', 'REI Outlet Women’s Clothing', 'REI Outlet Women’s Footwear'] }
      ],
      kidsSubmenu: [
        { title: 'Footwear', items: ['Boots', 'Shoes', 'Sandals', 'Socks'] },
        { title: 'Jackets', items: ['Insulated Jackets', 'Fleece & Soft-Shell', 'Rain Jackets', 'Snow Jackets', 'Casual Jackets', 'Vests'] },
        { title: 'Clothing', items: ['Shirts', 'Sweaters & Hoodies', 'Pants', 'Shorts', 'Skirts & Dresses', 'Swimwear'] },
        { title: 'Accessories', items: ['Hats', 'Gloves & Mittens', 'Socks', 'Sunglasses', 'Base Layers'] },
        { title: 'Kids Camping', items: ['Baby Carrier Packs', 'Backpacks', 'Sleeping Bags'] },
        { title: 'Kids Cycling', items: ['Bikes', 'Helmets', 'Trailers', 'Accessories'] },
        { title: 'Snow', items: ['Downhill Skiing', 'Cross-Country Skiing', 'Snowboarding', 'Snowshoes'] },
        { title: 'Strollers', items: ['Strollers', 'Accessories', 'Conversion Kits', 'Weather Shields'] },
        { title: 'More', items: ['Kids’ Climbing', 'Kids’ Paddling', 'Toys & Games'] },
        { title: 'By Gender', items: ['Boys', 'Girls', 'Infant & Toddler'] },
        { title: 'Kids’ Deals', items: ['Boys’ Deals', 'Girls’ Deals', 'Infant & Toddler Deals', 'REI Outlet Kids Clothing', 'REI Outlet Kids Footwear'] }
      ],
      dealsSubmenu: [
        { title: 'Men\'s Deals', items: ['Jackets', 'Pants', 'Shirts', 'Underwear', 'All Men\'s Deals'] },
        { title: 'Women\'s Deals', items: ['Jackets', 'Pants', 'Shirts', 'Underwear', 'All Women\'s Deals'] },
        { title: 'Footwear Deals', items: ['Men\'s Footwear', 'Women\'s Footwear', 'Kids\'', 'Socks', 'All Footwear Deals'] },
        { title: 'Camp & Hike Deals', items: ['Tents', 'Sleeping Bags', 'Backpacks', 'Camp Kitchen', 'All Camp & Hike Deals'] },
        { title: 'Cycling Deals', items: ['Bikes', 'Bike Helmets', 'Cycling Clothing', 'Bike Accessories', 'All Cycling Deals'] },
        { title: 'Snow Deals', items: ['Downhill Skiing', 'Cross-Country Skiing', 'Snowboarding', 'Snowshoeing', 'All Snow Deals'] },
        { title: 'More Deals', items: ['Climbing', 'Kids\'', 'Paddling', 'Travel & Luggage', 'Shop All Deals'] },
        { title: 'REI Outlet', items: ['Deal of the Day', '50% Off', 'Deals under $20', 'Just Reduced', 'Shop all REI Outlet'] }
      ],
      moreSubmenu: [
        { title: 'Personal Outfitting', items: [] },
        { title: 'Rental Gear', items: [] },
        { title: 'Gift Cards', items: [] },
        { title: 'Footwear', items: [] },
        { title: 'Electronics', items: [] },
        { title: 'Car Racks', items: [] },
        { title: 'Packs & Bags', items: [] },
        { title: 'Sunglasses', items: [] },
        { title: 'Books & Maps', items: [] },
        { title: 'Dog Gear', items: [] },
        { title: 'Outdoor Gifts', items: [] },
        { title: 'Used Gear', items: [] },
        { title: 'New Arrivals', items: [] },
        { title: 'Gift Registry', items: [] },
        { title: 'All Brands', items: [] },
        { title: 'All Categories', items: [] }
      ]
    // #endregion 
    };

    this.onSubmenuClick = this.onSubmenuClick.bind(this);
  }

  onSubmenuClick(e) {
    let visCopy = Object.assign({}, this.state.visibility);
    const initVis = this.state.visibility[e.target.getAttribute('visname')];

    for (let key in visCopy) {
      visCopy[key] = false;
    }

    console.log(e.target.getAttribute('visname'));
    visCopy[e.target.getAttribute('visname')] = !initVis;

    this.setState({
      visibility: visCopy
    });
  }


  render() {
    return (
      <div id="AJsectionnavwrap">
        <SectionActions></SectionActions>
        <ul id="AJsectionnav">
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.campHikeVis? " AJsubmenumtn" : null)} visname="campHikeVis" onClick={this.onSubmenuClick}>Camp & Hike</div>
            </div>
            {this.state.visibility.campHikeVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">Camp & Hike</div>
                <Submenu2 lvl2={this.state.campHikeSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <div className="AJmerchComp">
                    <img className="AJmerchpic" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/CampAndHike.jpg"/>
                    <ul className="AJextras">
                      <li>New Arrivals</li>
                      <li>Gym Climbing Gear</li>
                      <li>Top Rated Gear</li>
                      <li>Shop Climbing Gear</li>
                    </ul>
                  </div>
                  <ul className="AJexploresection">
                    <ExploreItem icon="AJnotepadicon" name="Expert Advice" subtitle="Checklists and how-tos"/>
                    <ExploreItem icon="AJcompassicon" name="Classes" subtitle="Expert-led instruction"/>
                    <ExploreItem icon="AJtagicon" name="REI Adventures Trips" subtitle="Award-winning trips"/>
                    <ExploreItem icon="AJcalendaricon" name="Personal Outfitting" subtitle="Schedule a visit"/>
                    <ExploreItem icon="AJcaricon" name="Gear Rentals" subtitle="Outdoor rental equipment"/>
                  </ul>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.climbVis? " AJsubmenumtn" : null)} visname="climbVis" onClick={this.onSubmenuClick}>Climb</div>
            </div>
            {this.state.visibility.climbVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">Climb</div>
                <Submenu2 lvl2={this.state.climbSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <div className="AJmerchComp">
                    <img className="AJmerchpic" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/Climb.jpg"/>
                    <ul className="AJextras">
                      <li>New Arrivals</li>
                      <li>Gym Climbing Gear</li>
                      <li>Top Rated Gear</li>
                      <li>Shop Climbing Gear</li>
                    </ul>
                  </div>
                  <ul className="AJexploresection">
                    <ExploreItem icon="AJnotepadicon" name="Expert Advice" subtitle="Checklists and how-tos"/>
                    <ExploreItem icon="AJcompassicon" name="Classes" subtitle="Expert-led instruction"/>
                    <ExploreItem icon="AJtagicon" name="REI Adventures Trips" subtitle="Award-winning trips"/>
                    <ExploreItem icon="AJcaricon" name="Gear Rentals" subtitle="Outdoor rental equipment"/>
                  </ul>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.cycleVis? " AJsubmenumtn" : null)} visname="cycleVis" onClick={this.onSubmenuClick}>Cycle</div>
            </div>
            {this.state.visibility.cycleVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">Cycle</div>
                <Submenu2 lvl2={this.state.cycleSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <div className="AJmerchComp">
                    <img className="AJmerchpic" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/Cycle.jpg"/>
                    <ul className="AJextras">
                      <li>New Arrivals</li>
                      <li>Indoor Cycling</li>
                      <li>Shop cycling Gear</li>
                    </ul>
                  </div>
                  <ul className="AJexploresection">
                    <ExploreItem icon="AJnotepadicon" name="Expert Advice" subtitle="Checklists and how-tos"/>
                    <ExploreItem icon="AJgearicon" name="Shop Services" subtitle="We'll fix you up"/>
                    <ExploreItem icon="AJcompassicon" name="Classes" subtitle="Expert-led instruction"/>
                    <ExploreItem icon="AJtagicon" name="REI Adventures Trips" subtitle="Award-winning trips"/>
                    <ExploreItem icon="AJcaricon" name="Gear Rentals" subtitle="Outdoor rental equipment"/>
                  </ul>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.paddleVis? " AJsubmenumtn" : null)} visname="paddleVis" onClick={this.onSubmenuClick}>Paddle</div>
            </div>
            {this.state.visibility.paddleVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">Paddle</div>
                <Submenu2 lvl2={this.state.paddleSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <div className="AJmerchComp">
                    <img className="AJmerchpic" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/Paddle.jpg"/>
                    <ul className="AJextras">
                      <li>New Arrivals</li>
                      <li>Women's Swimwear</li>
                      <li>Shop Paddling Gear</li>
                    </ul>
                  </div>
                  <ul className="AJexploresection">
                    <ExploreItem icon="AJnotepadicon" name="Expert Advice" subtitle="Checklists and how-tos"/>
                    <ExploreItem icon="AJcompassicon" name="Classes" subtitle="Expert-led instruction"/>
                    <ExploreItem icon="AJtagicon" name="REI Adventures Trips" subtitle="Award-winning trips"/>
                    <ExploreItem icon="AJcaricon" name="Gear Rentals" subtitle="Outdoor rental equipment"/>
                  </ul>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.runVis? " AJsubmenumtn" : null)} visname="runVis" onClick={this.onSubmenuClick}>Run</div>
            </div>
            {this.state.visibility.runVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">Run</div>
                <Submenu2 lvl2={this.state.runSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <div className="AJmerchComp">
                    <img className="AJmerchpic" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/Run.jpg"/>
                    <ul className="AJextras">
                      <li>New Spring Arrivals</li>
                      <li>Waterproof Trail Running Shoes</li>
                      <li>Cold Weather Training</li>
                      <li>Shop Running Gear</li>
                    </ul>
                  </div>
                  <ul className="AJexploresection">
                    <ExploreItem icon="AJnotepadicon" name="Expert Advice" subtitle="Checklists and how-tos"/>
                    <ExploreItem icon="AJcompassicon" name="Classes" subtitle="Expert-led instruction"/>
                  </ul>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.snowVis? " AJsubmenumtn" : null)} visname="snowVis" onClick={this.onSubmenuClick}>Snow</div>
            </div>
            {this.state.visibility.snowVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">Snow</div>
                <Submenu2 lvl2={this.state.snowSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <div className="AJmerchComp">
                    <img className="AJmerchpic" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/Climb.jpg"/>
                    <ul className="AJextras">
                      <li>Shop Base Layers</li>
                      <li>Ski Boot Fit Wizard</li>
                      <li>Member Lift Ticket Deals</li>
                      <li>Shop Snowsports Gear</li>
                    </ul>
                  </div>
                  <ul className="AJexploresection">
                    <ExploreItem icon="AJnotepadicon" name="Expert Advice" subtitle="Checklists and how-tos"/>
                    <ExploreItem icon="AJgearicon" name="Shop Services" subtitle="We'll fix you up"/>
                    <ExploreItem icon="AJcompassicon" name="Classes" subtitle="Expert-led instruction"/>
                    <ExploreItem icon="AJtagicon" name="REI Adventures Trips" subtitle="Award-winning trips"/>
                    <ExploreItem icon="AJcaricon" name="Gear Rentals" subtitle="Outdoor rental equipment"/>
                    <ExploreItem icon="AJbooticon" name="Ski Boot Fit Wizard" subtitle="Find the right boots for you"/>
                  </ul>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.travelVis? " AJsubmenumtn" : null)} visname="travelVis" onClick={this.onSubmenuClick}>Travel</div>
            </div>
            {this.state.visibility.travelVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">Travel</div>
                <Submenu2 lvl2={this.state.travelSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <div className="AJmerchComp">
                    <img className="AJmerchpic" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/Travel.jpg"/>
                    <ul className="AJextras">
                      <li>New Arrivals</li>
                      <li>Top Rated Travel Gear</li>
                      <li>Beyonder Travel Collection</li>
                      <li>Shop Travel Gear</li>
                    </ul>
                  </div>
                  <ExploreItem icon="AJtagicon" name="REI Adventures Trips" subtitle="Award-winning trips"/>
                  <ExploreItem icon="AJnotepadicon" name="Expert Advice" subtitle="Checklists & how-tos"/>
                  <ExploreItem icon="AJcalendaricon" name="Personal Outfitting" subtitle="Schedule a visit"/>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.yogaVis? " AJsubmenumtn" : null)} visname="yogaVis" onClick={this.onSubmenuClick}>Yoga</div>
            </div>
            {this.state.visibility.yogaVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">Yoga</div>
                <Submenu2 lvl2={this.state.yogaSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <div className="AJmerchComp">
                    <img className="AJmerchpic" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/Yoga.jpg"/>
                    <ul className="AJextras">
                      <li>New Arrivals</li>
                      <li>Street to Studio</li>
                      <li>Maternity</li>
                      <li>Shop Yoga</li>
                    </ul>
                  </div>
                  <ExploreItem icon="AJnotepadicon" name="Expert Advice" subtitle="Checklists & how-tos"/>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.menVis? " AJsubmenumtn" : null)} visname="menVis" onClick={this.onSubmenuClick}>Men</div>
            </div>
            {this.state.visibility.menVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">Men</div>
                <Submenu2 lvl2={this.state.menSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <div className="AJmerchComp">
                    <img className="AJmerchpic" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/Travel.jpg"/>
                    <ul className="AJextras">
                      <li>Winter Jackets, Boots, Gloves & Hats</li>
                      <li>Men's Snowsports Clothing</li>
                      <li>Sale & Clearance: Up to 50% Off</li>
                      <li>Shop Men's Clothing & Gear</li>
                    </ul>
                  </div>
                  <ExploreItem icon="AJnotepadicon" name="Expert Advice" subtitle="Checklists & how-tos"/>
                  <ExploreItem icon="AJcalendaricon" name="Personal Outfitting" subtitle="Schedule a visit"/>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.womenVis? " AJsubmenumtn" : null)} visname="womenVis" onClick={this.onSubmenuClick}>Women</div>
            </div>  
            {this.state.visibility.womenVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">Women</div>
                <Submenu2 lvl2={this.state.womenSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <div className="AJmerchComp">
                    <img className="AJmerchpic" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/Travel.jpg"/>
                    <ul className="AJextras">
                      <li>Winter Jackets, Boots, Gloves & Hats</li>
                      <li>Women's Snowsports Clothing</li>
                      <li>Sale & Clearance: Up to 50% Off</li>
                      <li>Shop Women's Clothing & Gear</li>
                    </ul>
                  </div>
                  <ExploreItem icon="AJtagicon" name="Women's Adventures" subtitle="Award-winning trips"/>
                  <ExploreItem icon="AJnotepadicon" name="Expert Advice" subtitle="Checklists & how-tos"/>
                  <ExploreItem icon="AJnotebandannaicon" name="Force of Nature" subtitle="Women in the outdoors"/>
                  <ExploreItem icon="AJcalendaricon" name="Personal Outfitting" subtitle="Schedule a visit"/>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.kidsVis? " AJsubmenumtn" : null)} visname="kidsVis" onClick={this.onSubmenuClick}>Kids</div>
            </div>
            {this.state.visibility.kidsVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">Kids</div>
                <Submenu2 lvl2={this.state.kidsSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <div className="AJmerchComp">
                    <img className="AJmerchpic" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/Kids.jpg"/>
                    <ul className="AJextras">
                      <li>Kids' Winter Jackets, Boots, Gloves & Hats</li>
                      <li>Kids' Baselayers</li>
                      <li>Sale & Clearance: Up to 50% Off</li>
                      <li>Shop Kids' Clothing & Gear</li>
                    </ul>
                  </div> 
                  <ExploreItem icon="AJnotepadicon" name="Expert Advice" subtitle="Checklists & how-tos"/>
                  <ExploreItem icon="AJtagicon" name="REI Adventure Trips" subtitle="Award-winning trips"/>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.dealsVis? " AJsubmenumtn" : null)} visname="dealsVis" onClick={this.onSubmenuClick}>Deals</div>
            </div>
            {this.state.visibility.dealsVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">Deals</div>
                <Submenu2 lvl2={this.state.dealsSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <div className="AJmerchComp">
                    <img className="AJmerchpic" src="https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/Deals.jpg"/>
                    <ul className="AJextras">
                      <li>Clothing Deals</li>
                      <li>50% Off Deals</li>
                      <li>Featured Deals</li>
                      <li>Shop All Deals</li>
                    </ul>
                    
                  </div>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div className="AJmenulevel1namewrapper AJmousepointer">
              <div className={"AJhovergreen AJmousepointer" + (this.state.visibility.moreVis? " AJsubmenumtn" : null)} visname="moreVis" onClick={this.onSubmenuClick}>More</div>
            </div>
            {this.state.visibility.moreVis ?
              (<div className="AJmenulevel2modal">
                <div className="AJmenulevel2title">More</div>
                <Submenu2 lvl2={this.state.moreSubmenu}></Submenu2>
                <div className="AJsidebar">
                  <ul className="AJexploresection">
                    <ExploreItem icon="AJpickaxeicon" name="Membership" subtitle="Great deals & benefits"/>
                    <ExploreItem icon="AJcompassicon" name="Classes & Events" subtitle="Expert-led instruction"/>
                    <ExploreItem icon="AJtagicon" name="REI Adventures Trips" subtitle="Award-winning trips"/>
                    <ExploreItem icon="AJnotepadicon" name="Expert Advice" subtitle="Checklists and how-tos"/>
                    <ExploreItem icon="AJtreeicon" name="Opt Outside" subtitle="Go out with us"/>
                    <ExploreItem icon="AJbandannaicon" name="Force of Nature" subtitle="Women in the outdoors"/>
                    <ExploreItem icon="AJspeechbubbleicon" name="Co-op Journal" subtitle="Stories of a life outdoors"/>
                    <ExploreItem icon="AJleaficon" name="Stewardship" subtitle="Taking care of places we love"/>
                  </ul>
                </div>
              </div>)
              : null
            }
          </li>
          <li className="AJmenulevel1item">
            <div id="AJrei-outlet-wrap">
              <svg id="AJrei-outlet" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 251 30">
                <path d="M 3.15 29.3296 H 0.84 C 0.378 29.3296 0 28.9525 0 28.4916 V 0.837989 C 0 0.377095 0.378 0 0.84 0 h 2.31 c 0.462 0 0.84 0.377095 0.84 0.837989 V 28.4916 c 0 0.335196 -0.252 0.837989 -0.84 0.837989 Z m 10.016 -0.837989 L 8.21 18.1006 c -0.21 -0.502793 -0.21 -0.879888 -0.21 -1.34078 v -2.30447 c 0 -0.460894 0.378 -0.837989 0.84 -0.837989 c 2.562 0 4.704 -2.17877 4.704 -4.81844 c 0 -2.63966 -2.142 -4.81844 -4.704 -4.81844 c -0.462 0 -0.84 -0.377095 -0.84 -0.837989 V 0.837989 C 8 0.377095 8.378 0 8.84 0 C 13.712 0 17.66 3.93855 17.66 8.79888 c 0 3.18436 -1.806 6.07542 -4.368 7.5838 c -0.798 0.460894 -1.092 0.75419 -0.714 1.50838 l 4.956 10.1816 c 0.294 0.628492 0.042 1.25698 -0.798 1.25698 h -2.352 c -0.672 0 -0.966 -0.335196 -1.218 -0.837989 Z m 18.824 -16.5503 c 0 0.251397 0.168 0.418994 0.42 0.418994 h 9.954 c 0.462 0 0.84 0.377095 0.84 0.837989 v 2.30447 c 0 0.460894 -0.378 0.837989 -0.84 0.837989 h -9.954 c -0.252 0 -0.42 0.167598 -0.42 0.418994 v 8.17039 c 0 0.251397 0.168 0.418994 0.42 0.418994 h 10.5 c 0.462 0 0.84 0.377095 0.84 0.837989 v 2.30447 c 0 0.460894 -0.378 0.837989 -0.84 0.837989 H 28.84 c -0.462 0 -0.84 -0.377095 -0.84 -0.837989 V 0.837989 C 28 0.377095 28.378 0 28.84 0 h 13.986 c 0.462 0 0.84 0.377095 0.84 0.837989 V 3.14246 c 0 0.460894 -0.378 0.837989 -0.84 0.837989 H 32.41 c -0.252 0 -0.42 0.167598 -0.42 0.418994 v 7.5419 Z m 27.31 -7.8771 c 0 -0.251397 -0.168 -0.418994 -0.42 -0.418994 h -4.62 c -0.462 0 -0.84 -0.377095 -0.84 -0.837989 V 0.837989 c 0 -0.460894 0.378 -0.837989 0.84 -0.837989 H 68.33 c 0.462 0 0.84 0.377095 0.84 0.837989 v 1.96927 c 0 0.460894 -0.378 0.837989 -0.84 0.837989 h -4.62 c -0.252 0 -0.42 0.167598 -0.42 0.418994 v 21.1592 c 0 0.251397 0.168 0.418994 0.42 0.418994 h 5.04 c 0.462 0 0.84 0.377095 0.84 0.837989 v 2.01117 c 0 0.460894 -0.378 0.837989 -0.84 0.837989 H 53.84 c -0.462 0 -0.84 -0.377095 -0.84 -0.837989 v -2.01117 c 0 -0.460894 0.378 -0.837989 0.84 -0.837989 h 5.04 c 0.252 0 0.42 -0.167598 0.42 -0.418994 V 4.06425 Z M 100.156 15 c 0 -3.10056 0.168 -6.57821 0.882 -8.17039 c 0.63 -1.38268 1.386 -1.96927 2.394 -2.47207 c 0.462 -0.209497 0.840001 -0.460894 0.840001 -0.921788 V 0.670391 C 104.272 0.251397 103.978 0 103.6 0 c -0.546 0 -1.68 0.335196 -2.898 1.13128 c -1.26 0.879888 -2.52 2.13687 -3.486 4.44134 C 96.25 7.8771 96.04 11.1034 96.04 15 s 0.21 7.1229 1.176 9.42737 s 2.226 3.56145 3.486 4.44134 c 1.218 0.796089 2.352 1.13128 2.898 1.13128 c 0.378 0 0.672001 -0.251397 0.672001 -0.670391 v -2.76536 c 0 -0.460894 -0.378001 -0.71229 -0.840001 -0.921788 c -1.008 -0.502793 -1.764 -1.08939 -2.394 -2.47207 c -0.714 -1.59218 -0.882 -5.06983 -0.882 -8.17039 Z m 11.22 0 c 0 3.10056 -0.168 6.57821 -0.882 8.17039 c -0.63 1.38268 -1.386 1.96927 -2.394 2.47207 c -0.462 0.209497 -0.84 0.460894 -0.84 0.921788 v 2.76536 c 0 0.418994 0.294 0.670391 0.672 0.670391 c 0.546 0 1.68 -0.335196 2.898 -1.13128 c 1.26 -0.879888 2.52 -2.13687 3.486 -4.44134 c 0.966 -2.30447 1.176 -5.53073 1.176 -9.42737 s -0.21 -7.12291 -1.176 -9.42737 c -0.966 -2.30447 -2.226 -3.56145 -3.486 -4.44134 C 109.612 0.335196 108.478 0 107.932 0 c -0.378 0 -0.672 0.251397 -0.672 0.670391 V 3.43575 c 0 0.460894 0.378 0.71229 0.84 0.921788 c 1.008 0.502793 1.764 1.08939 2.394 2.47207 c 0.714 1.59218 0.882 5.06983 0.882 8.17039 Z M 128.49 20.9497 V 0.837989 C 128.49 0.377095 128.112 0 127.65 0 h -2.31 c -0.462 0 -0.84 0.377095 -0.84 0.837989 V 20.9497 c 0 5.02793 4.032 8.71508 9.45 8.71508 c 5.082 0 9.45 -3.68715 9.45 -8.71508 V 0.837989 c 0 -0.460894 -0.378 -0.837989 -0.84 -0.837989 h -2.31 c -0.462 0 -0.84 0.377095 -0.84 0.837989 V 20.9497 c 0 2.68156 -2.268 4.73464 -5.46 4.73464 c -2.73 0 -5.46 -1.38268 -5.46 -4.73464 Z m 24.71 -16.9693 h 5.586 c 0.252 0 0.42 0.167598 0.42 0.418994 V 28.4916 c 0 0.460894 0.378 0.837989 0.84 0.837989 h 2.31 c 0.462 0 0.84 -0.377095 0.84 -0.837989 V 4.39944 c 0 -0.251397 0.168 -0.418994 0.42 -0.418994 h 5.544 c 0.462 0 0.84 -0.377095 0.84 -0.837989 V 0.837989 c 0 -0.460894 -0.378 -0.837989 -0.84 -0.837989 h -15.96 c -0.462 0 -0.84 0.377095 -0.84 0.837989 V 3.14246 c 0 0.460894 0.378 0.837989 0.84 0.837989 Z m 32.15 20.9497 V 0.837989 c 0 -0.460894 -0.378 -0.837989 -0.84 -0.837989 h -2.31 c -0.462 0 -0.84 0.377095 -0.84 0.837989 V 28.4916 c 0 0.460894 0.378 0.837989 0.84 0.837989 h 13.818 c 0.462 0 0.84 -0.377095 0.84 -0.837989 v -2.30447 c 0 -0.460894 -0.378 -0.837989 -0.84 -0.837989 h -10.248 c -0.252 0 -0.42 -0.167598 -0.42 -0.418994 Z m 27 -12.9888 V 4.39944 c 0 -0.251397 0.168 -0.418994 0.42 -0.418994 h 10.416 c 0.462 0 0.84 -0.377095 0.84 -0.837989 V 0.837989 c 0 -0.460894 -0.378 -0.837989 -0.84 -0.837989 h -13.986 c -0.462 0 -0.84 0.377095 -0.84 0.837989 V 28.4916 c 0 0.460894 0.378 0.837989 0.84 0.837989 h 14.07 c 0.462 0 0.84 -0.377095 0.84 -0.837989 v -2.30447 c 0 -0.460894 -0.378 -0.837989 -0.84 -0.837989 h -10.5 c -0.252 0 -0.42 -0.167598 -0.42 -0.418994 v -8.17039 c 0 -0.251397 0.168 -0.418994 0.42 -0.418994 h 9.954 c 0.462 0 0.84 -0.377095 0.84 -0.837989 V 13.1983 c 0 -0.460894 -0.378 -0.837989 -0.84 -0.837989 h -9.954 c -0.252 0 -0.42 -0.167598 -0.42 -0.418994 Z m 21.85 -7.96089 h 5.586 c 0.252 0 0.42 0.167598 0.42 0.418994 V 28.4916 c 0 0.460894 0.378 0.837989 0.84 0.837989 H 243.356 c 0.462 0 0.84 -0.377095 0.84 -0.837989 V 4.39944 c 0 -0.251397 0.168 -0.418994 0.42 -0.418994 h 5.544 c 0.462 0 0.84 -0.377095 0.84 -0.837989 V 0.837989 C 251 0.377095 250.622 0 250.16 0 h -15.96 c -0.462 0 -0.84 0.377095 -0.84 0.837989 V 3.14246 c 0 0.460894 0.378 0.837989 0.84 0.837989 Z" />
              </svg>
              <svg id="AJrei-outlet-caret" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16 12a.997.997 0 00-.288-.702l-5.005-5.005a1 1 0 00-1.414 1.414L13.585 12 9.29 16.295a1 1 0 001.417 1.412l4.98-4.98A.997.997 0 0016 12z" />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}


export default Submenu;