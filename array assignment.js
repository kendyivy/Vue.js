
var array[] =
        { 10, 20, 30, 25, 50, 55, 90, 10, 20, 30 };

        var  max = 0;
        for (int i = 0; i < array.length; ++i)
        {
            if (max < array[i])
                max = array[i];

        }

        System.out.println("The Max is: " + max);

        if (System.console() != 0)
            System.console().readLine();

    }
}
}