import React, { useState, useContext } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom'; // استيراد Navigate
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Heart, Truck, Shirt, UserCog, LogOut } from 'lucide-react';
import { AuthContext } from '../Context/AuthContext';
import './CSS/Profail.css';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, logout } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  const [profileData, setProfileData] =
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useState({
    
    fullName: "Nashat",
    email: "1234@email.com",
    phone: "+20 123456789",
    address: "Egypt",
    height: "175",
    weight: "70",
    size: "L",
    pantsSize: "32",
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // هنا ممكن تضيف منطق حفظ البيانات عبر API لو حبيت
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="user-profile-container">
      <h1 className="profile-title">👤 Profile</h1>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="profile-tabs-list">
          <TabsTrigger value="personal" className="profile-tab">
            <UserCog size={18} /> Personal Information
          </TabsTrigger>
          <TabsTrigger value="orders" className="profile-tab">
            <Truck size={18} /> Orders
          </TabsTrigger>
          <TabsTrigger value="wishlist" className="profile-tab">
            <Heart size={18} /> Favorites
          </TabsTrigger>
          <TabsTrigger value="wardrobe" className="profile-tab">
            <Shirt size={18} /> My Wardrobe
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card className="profile-card">
            <CardContent className="profile-grid">
              {Object.keys(profileData).map((key) => (
                <Input
                  key={key}
                  name={key}
                  placeholder={key}
                  value={profileData[key]}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              ))}
            </CardContent>
          </Card>

          <div className="flex gap-4 mt-4">
            {!isEditing ? (
              <Button className="edit-button" onClick={handleEdit}>
                ✏️ Edit
              </Button>
            ) : (
              <Button className="save-button" onClick={handleSave}>
                💾 Save Changes
              </Button>
            )}

            <Button className="logout-button" variant="destructive" onClick={handleLogout}>
              <LogOut size={18} className="mr-2" /> Logout
            </Button>
          </div>
        </TabsContent>

        {/* باقي التابات كما هي */}
        <TabsContent value="orders">
          <Card className="profile-card">
            <CardContent className="profile-card-content">
              <p className="empty-text">No requests yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wishlist">
          <Card className="profile-card">
            <CardContent className="profile-card-content">
              <p className="empty-text">The favorites list is empty.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wardrobe">
          <Card className="profile-card">
            <CardContent className="profile-card-content">
              <p className="empty-text">You have not purchased any product yet.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
