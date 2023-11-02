<?php

namespace App\Console\Commands;

use App\Mail\CustomEmail;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendMail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Mail::to('saiwinoo@gmail.com')->queue(new CustomEmail(
            env('MAIL_SENDER'),
            'Testing',
            'This is just a body',
        ));
    }
}
