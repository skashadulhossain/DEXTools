import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../Header_Setting/HeaderSetting.css';

const HeaderSetting = ({ isSettingOpen, toggleSetting }) => {
    const [settings, setSettings] = useState({
        hotPairs: true,
        chartCandles: true,
        fillGaps: true,
        notifications: false,
        darkMode: true,
    });

    const handleToggle = (key) => {
        setSettings((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div>
            <div className={`HeaderSetting_modal ${isSettingOpen ? 'open' : ''}`}>
                <div className={`HeaderSetting_modal-content ${isSettingOpen ? 'open' : ''}`}>
                    <div className="HeaderSetting_modal-header">
                        <h2>App settings</h2>
                        <FaTimes className="HeaderSetting_close-button" onClick={toggleSetting} />
                    </div>

                    <p className="HeaderSetting_subtitle">Configurable parameters</p>

                    <div className="HeaderSetting_setting-item">
                        <div>
                            <h3>Hot pairs movement</h3>
                            <p>{settings.hotPairs ? 'Enabled' : 'Disabled'}</p>
                        </div>
                        <label className="HeaderSetting_switch">
                            <input
                                type="checkbox"
                                checked={settings.hotPairs}
                                onChange={() => handleToggle('hotPairs')}
                            />
                            <span className="HeaderSetting_slider"></span>
                        </label>
                    </div>

                    <div className="HeaderSetting_setting-item">
                        <div>
                            <h3>Chart candles normalization</h3>
                            <p>{settings.chartCandles ? 'Enabled' : 'Disabled'}</p>
                        </div>
                        <label className="HeaderSetting_switch">
                            <input
                                type="checkbox"
                                checked={settings.chartCandles}
                                onChange={() => handleToggle('chartCandles')}
                            />
                            <span className="HeaderSetting_slider"></span>
                        </label>
                    </div>

                    <div className="HeaderSetting_setting-item">
                        <div>
                            <h3>Fill gaps in chart candles</h3>
                            <p>Fill periods of inactivity</p>
                            <p>{settings.fillGaps ? 'Enabled' : 'Disabled'}</p>
                        </div>
                        <label className="HeaderSetting_switch">
                            <input
                                type="checkbox"
                                checked={settings.fillGaps}
                                onChange={() => handleToggle('fillGaps')}
                            />
                            <span className="HeaderSetting_slider"></span>
                        </label>
                    </div>

                    <div className="HeaderSetting_setting-item">
                        <div>
                            <h3>Browser Notifications</h3>
                            <p>{settings.notifications ? 'Enabled' : 'Disabled'}</p>
                            {!settings.notifications && (
                                <p className="HeaderSetting_notification-text">
                                    Your browser notifications are disabled for this site. Please enable them to receive new alerts.
                                </p>
                            )}
                        </div>
                        <label className="HeaderSetting_switch">
                            <input
                                type="checkbox"
                                checked={settings.notifications}
                                onChange={() => handleToggle('notifications')}
                            />
                            <span className="HeaderSetting_slider"></span>
                        </label>
                    </div>

                    <div className="HeaderSetting_setting-item">
                        <div>
                            <h3>Select language</h3>
                            <p>Select interface language</p>
                        </div>
                        <select className="HeaderSetting_language-select">
                            <option>English</option>
                            {/* Add more language options if needed */}
                        </select>
                    </div>

                    <div className="HeaderSetting_setting-item">
                        <div>
                            <h3>Dark Mode</h3>
                            <p>{settings.darkMode ? 'Enabled' : 'Disabled'}</p>
                        </div>
                        <label className="HeaderSetting_switch">
                            <input
                                type="checkbox"
                                checked={settings.darkMode}
                                onChange={() => handleToggle('darkMode')}
                            />
                            <span className="HeaderSetting_slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSetting;
