import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SpinAlertProps {
    message?: string;
}

const SpinAlert: React.FC<SpinAlertProps> = ({
    message = 'Spin the ball to get more information!',
}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 max-w-sm"
        >
            <Alert>
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>
                    {message}
                </AlertDescription>
            </Alert>
        </div>
    );
};

export default SpinAlert;
